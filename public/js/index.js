var vueThis;
var url = "tmp/123";



new Vue({
  el: "#main",
  data: {
    fileList: [],
    textStatus: "",
    isDownloading: false,
  },
  created: function () {},
  methods: {
    GenerateText(text) {
      
      var res = "";
      res += "<table class='text_block'>";
      res += "<td class='text_block_td'>";
      res += text;
      res += "</td>";
      res += "</table>";
      return res;
    },
    IsNeedAccess() {
      $.ajax({
        type: "GET",
        url: "/IsNeedAccess",
        success: function (res) {
          vueThis.ParseJSON(res);
        },
      });
    },
    GetFileList() {
      $.ajax({
        type: "GET",
        url: "/GetFileList",
        success: function (res) {
          vueThis.ParseJSON(res);
        },
      });
    },
    GetQueryString() {
      var vars = [],
        hash;
      var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
      for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split("=");
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    },
    SetCode(code) {
      $.ajax({
        type: "GET",
        url: "/SetCode",
        data: "code=" + code,
        success: function (res) {
          vueThis.ParseJSON(res);
        },
      });
    },
    GetAccessURL() {
      $.ajax({
        type: "GET",
        url: "/GetAccessURL",
        success: function (res) {
          vueThis.ParseJSON(res);
        },
      });
    },
    ParseJSON(str) {
      var json = JSON.parse(str);
      var cmd = json.cmd;
      var content = JSON.parse(json.content);
      if (cmd == "IsNeedAccess") {
        if (content) {
          var code = this.GetQueryString().code;
          if (code != undefined && code.length != 0) {
            vueThis.SetCode(code);
            setTimeout(function () {
              window.location.replace(window.location.href.split("?")[0]);
            }, 1000);
          } else {
            vueThis.GetAccessURL();
          }
        }
      } else if (cmd == "GetAccessURL") {
        window.location.replace(content);
      } else if (cmd == "SetCode") {
        if (content == "Get token failed") {
          vueThis.IsNeedAccess();
        }
      } else if (cmd == "GetFileList") {
        if (content.isNeedDownload != undefined && content.isNeedDownload) {
          vueThis.textStatus = "Downloading";
          vueThis.isDownloading = true;
          vueThis.CheckDownload();
        } else {
          vueThis.fileList = content;
          vueThis.textStatus = "Download Done";
        }
      }
      else if(cmd == "GetDownloadStatus"){
        var total = content.total;
        var now = content.now;
        if (now == 0){
          vueThis.isDownloading = false;
        }
        else{
          vueThis.textStatus = "Downloading: " + now + "/" + total;
        }
      }
    },
    Play(file) {
      $("#" + file.id + " source").attr("src", url + file.id + "." +file.name.split(".")[file.name.split(".").length - 1]);
      $("#" + file.id)[0].load();
    },
    GetDownloadStatus() {
      $.ajax({
        type: "GET",
        url: "/GetDownloadStatus",
        success: function (res) {
          vueThis.ParseJSON(res);
        },
      });
    },
    CheckDownload() {
      var interval = setInterval(function () {
        if (vueThis.isDownloading) {
          vueThis.GetDownloadStatus();
        } else {
          clearInterval(interval);
          vueThis.textStatus = "Download Done";
          vueThis.GetFileList();
        }
      }, 5000);
    },
  },
  mounted: function () {
    vueThis = this;
    vueThis.IsNeedAccess();
  },
});
