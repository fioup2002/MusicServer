var express = require("express");
var google = require("../google/main.js");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.redirect("/index.html");
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
router.get("/favicon.ico", function (req, res, next) {
  res.send("");
});
 

module.exports = router;

function SendResponse(type, str, res) {
  var obj = new Object();
  obj.cmd = type;
  obj.content = str;
  res.send(JSON.stringify(obj));
}
