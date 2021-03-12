var vueThis;
new Vue({
  el: "#main",
  data: {
    fileList:[]
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
            setTimeout(function(){
              window.location.replace(window.location.href.split("?")[0]);
            },1000);
          }
          else{
            vueThis.GetAccessURL();
          }
        }
      } else if (cmd == "GetAccessURL") {
        window.location.replace(content);
      } else if (cmd == "SetCode") {
        if (content == "Get token failed") {
          vueThis.IsNeedAccess();
        }
      }else if(cmd == "GetFileList"){
        fileList = content;
      }
    },
  },
  mounted: function () {
    vueThis = this;
    vueThis.IsNeedAccess();
  },
});
