var express = require("express");
var google = require("../google/main.js");
var router = express.Router();
var jsdom = require("jsdom");
var phantom = require("phantom");
var crypto = require("crypto");
var md5 = require("md5");
var request = require("request");
var path = require("path");

var gHtml = "";
router.get("/test302", function (req, res, next) {
  res.redirect("./token.html");
});
router.get("/", function (req, res, next) {
  res.redirect("./token.html");
});
router.get("/GetFileList", function (req, res, next) {
  google.GetFileList(function (type, str) {
    SendResponse(type, str, res);
  });
});
router.get("/SetCode", function (req, res, next) {
  google.SetCode(req.query.code, function (type, str) {
    SendResponse(type, str, res);
  });
});
router.get("/IsNeedAccess", function (req, res, next) {
  google.IsNeedAccess(function (type, str) {
    SendResponse(type, str, res);
  });
});
router.get("/GetAccessURL", function (req, res, next) {
  google.GetAccessURL(function (type, str) {
    SendResponse(type, str, res);
  });
});
router.get("/GetDownloadStatus", function (req, res, next) {
  google.GetDownloadStatus(function (type, str) {
    SendResponse(type, str, res);
  });
});
router.get("/favicon.ico", function (req, res, next) {
  res.send("");
});
router.get("/getHtml", function (req, res, next) {
  res.send("");
});
router.get("/GetToken", function (req, res, next) {
  res.send(encrypt(req.query.value, "GTS2GWAPP1234578"));
});
router.get("/GetMd5", function (req, res, next) {
  res.send(md5(req.query.value));
});
router.get("/GetTokenFromURL", function (req, res, next) {
  var obj = JSON.parse(req.query.value);
  var param = obj.url;
  for (var key in obj) {
    if (key != "url") {
      param += key + "=" + obj[key] + "&";
    }
  }
  console.log(param);
  request(param, function (error, response, body) {
    console.log(response)
    res.send(body);
  });
});
router.get("/api/*", (req, res, next) => {
  var url = req.originalUrl;
  var reg = new RegExp("/api","g");
  url = url.replace(reg,"");
  url = "https://myid.jt9457.com" + url;
  request(url, function (error, response, body) {
    res.send(body);
  });
});
/*only slash*/
// router.get('/*', function(req, res, next) {
//   // res.sendFile(path.resolve('./public/index.html'));
// });

module.exports = router;

function SendResponse(type, str, res) {
  var obj = new Object();
  obj.cmd = type;
  obj.content = str;
  res.send(JSON.stringify(obj));
}

// ECB pkcs5padding 128位 GTS2GWAPP1234578 0 hex gb2312

function encrypt(data, key, iv) {
  iv = iv || "";
  var clearEncoding = "gb2312";
  var cipherEncoding = "hex";
  var cipherChunks = [];
  var cipher = crypto.createCipheriv("AES-128-ECB", key, iv);
  cipher.setAutoPadding(true);
  cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
  cipherChunks.push(cipher.final(cipherEncoding));
  return cipherChunks.join("");
}
//解密
// function decrypt (data, key, iv) {
//   if (!data) {
//       return "";
//   }
//   iv = iv || "";
//   var clearEncoding = 'utf8';
//   var cipherEncoding = 'base64';
//   var cipherChunks = [];
//   var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
//   decipher.setAutoPadding(true);
//   cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
//   cipherChunks.push(decipher.final(clearEncoding));
//   return cipherChunks.join('');
// }
