var express = require("express");
var google = require("../google/main.js");
var router = express.Router();
var jsdom  = require("jsdom");
var phantom = require("phantom");

var gHtml = "";
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

module.exports = router;

function SendResponse(type, str, res) {
  var obj = new Object();
  obj.cmd = type;
  obj.content = str;
  res.send(JSON.stringify(obj));
}

function GetHtml() {
  phantom.create().then(function (ph) {
    ph.createPage().then(function (page) {
      page.open("https://www.gffx188.com/news?type=tips").then(function (status) {
        page.property("content").then(function (content) {
          const { window } = new jsdom.JSDOM(content);
          var $ = require('jquery')(window);
          for (var i = 0; i < $(".content-module--item--1Jgbx").length; i++){
            console.log($($(".content-module--item--1Jgbx")[i]).children(".content-module--itemMain--wd5XD").html());
          }
          page.close().then(function () {
            ph.exit();
          });
        });
      });
    });
  });
}

GetHtml();