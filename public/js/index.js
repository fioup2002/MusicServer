new Vue({
  el: "#main",
  data: {
    
  },
  created: function () {
   
  },
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
    GetFileList(){
      console.log(1);
    }
  },
  mounted: function () {
    
  },
});