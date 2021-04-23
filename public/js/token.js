var vueThis;
new Vue({
  el: "#main",
  data: {
    textAESValue: "",
    returnAESValue: "",
    platform: "GTS2",
    type: "real",
    login_prev: "",
    pass: "abc123",
    sign: "",
    token : ""
  },
  created: function () {},
  mounted: function () {
    vueThis = this;
  },
  methods:{
    GenerateText(text) {
      var res = "";
      res += "<table class='text_block'>";
      res += "<td class='text_block_td'>";
      res += text;
      res += "</td>";
      res += "</table>";
      return res;
    },
    SendAESRequest(){
      vueThis.returnAESValue = "";
      vueThis.login_prev = "";
      vueThis.sign = "";
      vueThis.token = "";
      $.ajax({
        type: "GET",
        url: "/GetToken",
        data: "value=" + this.textAESValue,
        success: function (res) {
          vueThis.returnAESValue = res; 
          vueThis.login_prev = vueThis.returnAESValue + vueThis.platform + "members.getTokenNew"+ vueThis.type + vueThis.pass;
          vueThis.SendMD5Request();
        },
      });
    },
    SendMD5Request(){
      $.ajax({
        type: "GET",
        url: "/GetMd5",
        data: "value=" + this.login_prev,
        success: function (res) {
          vueThis.sign = res;
          vueThis.GetTokenFromURL();
        },
      });
    },
    GetTokenFromURL(){
      var obj = new Object();
      obj.service = "members.getTokenNew";
      obj.platform = vueThis.platform;
      obj.type = vueThis.type;
      obj.login = vueThis.returnAESValue;
      obj.sign = vueThis.sign;
      $.ajax({
        type: "GET",
        url: "/GetTokenFromURL",
        data: "value=" + JSON.stringify(obj),
        success: function (res) {
          res = $.parseJSON(res);
          vueThis.token = res.data.token;
          if (vueThis.token == undefined){
            console.log(res);
            vueThis.token = "Error";
          }
        },
      });
    }
  }
});




