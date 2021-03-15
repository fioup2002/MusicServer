const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
const SCOPES = ["https://www.googleapis.com/auth/drive"];
const TOKEN_PATH = "./google/token.json";
const CREDENTIAL_PATH = "./google/credentials.json";
const FILE_PATH = "./public/tmp";

var oAuth2Client;
var token;
var isNeedAccess = true;
var driveFiles = [];
var existsArray = [];
var isDownloading = false;

module.exports = {
  IsNeedAccess: function (callback) {
    callback("IsNeedAccess", JSON.stringify(isNeedAccess));
  },
  GetAccessURL: function (callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });
    callback("GetAccessURL", JSON.stringify(authUrl));
  },
  SetCode: function (code, callback) {
    oAuth2Client.getToken(code, (err, token) => {
      if (!err) {
        oAuth2Client.setCredentials(token);
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) {
            isNeedAccess = true;
            callback("SetCode", JSON.stringify("Get token failed"));
          } else {
            isNeedAccess = false;
            callback("SetCode", JSON.stringify("Get token success"));
          }
        });
      } else {
        isNeedAccess = true;
        callback("SetCode", JSON.stringify("Get token failed"));
      }
    });
  },
  GetFileList: function (callback) {
    ListFiles(function (files) {
      driveFiles = files;
      CheckFile(callback);
    });
  },
  GetDownloadStatus: function(callback){
    var obj = new Object();
    obj.total = driveFiles.length;
    obj.now = existsArray.length;
    callback("GetDownloadStatus", JSON.stringify(obj));
  }
};
function InitSetting() {
  if (fs.existsSync(CREDENTIAL_PATH)) {
    var credentials = JSON.parse(fs.readFileSync(CREDENTIAL_PATH));
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    if (fs.existsSync(TOKEN_PATH)) {
      isNeedAccess = false;
      token = fs.readFileSync(TOKEN_PATH);
      oAuth2Client.setCredentials(JSON.parse(token));
    } else {
      isNeedAccess = true;
    }
  } else {
    console.log("No credential file");
  }
  if (!fs.existsSync(FILE_PATH)){
    fs.mkdirSync(FILE_PATH);
  }
}
function ListFiles(callback) {
  const drive = google.drive({
    version: "v3",
    auth: oAuth2Client,
  });
  drive.files.list(
    {
      q: "mimeType = 'audio/mpeg' or mimeType = 'audio/flac'",
      fields: "nextPageToken, files(id, name)",
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      callback(res.data.files);
    }
  );
}
function CheckFile(callback) {
  for (var i = 0; i < driveFiles.length; i++) {
    var id = driveFiles[i].id;
    var name = driveFiles[i].name;
    var path = FILE_PATH + "/" + id + "." + name.split(".")[name.split(".").length - 1];
    if (!fs.existsSync(path)) {
      existsArray.push(driveFiles[i]);
    }
  }
  DownloadFile(callback);
}
function DownloadFile(callback) {
  isDownloading = true;
  if (existsArray.length != 0) {
    var obj = new Object();
    obj.isNeedDownload = isDownloading;
    if (callback != null) {
      callback("GetFileList", JSON.stringify(obj));
    }
    var id = existsArray[0].id;
    var name = existsArray[0].name;
    var path = FILE_PATH + "/" + id + "." + name.split(".")[name.split(".").length - 1];
    const drive = google.drive({
      version: "v3",
      auth: oAuth2Client,
    });
    var dest = fs.createWriteStream(path);
    drive.files.get({ fileId: id, alt: "media" }, { responseType: "stream" }, function (err, res) {
      res.data
        .on("end", () => {
          existsArray.shift();
          DownloadFile();
        })
        .on("error", (err) => {
          console.log("Error", err);
        })
        .pipe(dest);
    });
  } else {
    isDownloading = false;
    if (callback != null) {
      callback("GetFileList", JSON.stringify(driveFiles));
    }
  }
}
InitSetting();
