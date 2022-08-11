new Vue({
  el: "#main",
  data: {
    textAESValue: "",
    returnAESValue: "",
    platform: "GTS2",
    platformList: ["GTS2","MT4"],
    type: "real",
    sign_prev: "",
    pass: "abc123",
    passList: ["abc123", "eKu3dDCp758rt7QaH3QmIfbv9shIYh4Q"],
    url: "https://openapi.hxfx.com/tools/?",
    urlList: ["https://openapi.hxfx.com/tools/?", "https://openapi.gffx168.com/tools/?", "https://openapi.washingtou2022.com/tools/?","http://openapi.s89cloud.com/tools/?","http://openapi.n95cloud.com/tools/?"],
    sign: "",
    token: "",
  },
  methods: {
    SendAESRequest() {
      this.returnAESValue = "";
      this.sign_prev = "";
      this.sign = "";
      this.token = "";
      $.ajax({
        type: "GET",
        url: "/GetToken",
        data: "value=" + this.textAESValue,
        success: (res) => {
          this.returnAESValue = res;
          this.sign_prev = this.returnAESValue + this.platform + "members.getTokenNew" + this.type + this.pass;
          this.SendMD5Request();
        },
      });
    },
    SendMD5Request() {
      $.ajax({
        type: "GET",
        url: "/GetMd5",
        data: "value=" + this.sign_prev,
        success: (res) => {
          this.sign = res;
          this.GetTokenFromURL();
        },
      });
    },
    GetTokenFromURL() {
      var obj = new Object();
      obj.service = "members.getTokenNew";
      obj.platform = this.platform;
      obj.type = this.type;
      obj.login = this.returnAESValue;
      obj.sign = this.sign;
      obj.url = this.url;
      $.ajax({
        type: "GET",
        url: "/GetTokenFromURL",
        data: "value=" + JSON.stringify(obj),
        success: (res) => {
          console.log(res)
          res = JSON.parse(res);
          this.token = res.data.token;
          if (this.token == undefined) {
            console.log(res);
            this.token = "Error";
          }
        },
      });
    },
  },
});
