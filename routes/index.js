import { Router } from "express";
import { GetFileList, SetCode, IsNeedAccess, GetAccessURL, GetDownloadStatus } from "../google/main.js";
var router = Router();
import { create } from "phantom";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

var gHtml = "";

router.get("/", function (req, res, next) {
  res.redirect("/index.html");
});
router.get("/GetFileList", function (req, res, next) {
  GetFileList(function (type, str) {
    SendResponse(type, str, res);
  });
});
router.get("/SetCode", function (req, res, next) {
  SetCode(req.query.code, function (type, str) {
    SendResponse(type, str, res);
  });
});
router.get("/IsNeedAccess", function (req, res, next) {
  IsNeedAccess(function (type, str) {
    SendResponse(type, str, res);
  });
});
router.get("/GetAccessURL", function (req, res, next) {
  GetAccessURL(function (type, str) {
    SendResponse(type, str, res);
  });
});
router.get("/GetDownloadStatus", function (req, res, next) {
  GetDownloadStatus(function (type, str) {
    SendResponse(type, str, res);
  });
});
router.get("/favicon.ico", function (req, res, next) {
  res.send("");
});

router.get("/getHtml", function (req, res, next) {
  res.send("");
});

export default router;

function SendResponse(type, str, res) {
  var obj = new Object();
  obj.cmd = type;
  obj.content = str;
  res.send(JSON.stringify(obj));
}
function GetHtml() {
  create().then(function (ph) {
    ph.createPage().then(function (page) {
      page.open("https://www.gffx188.com/news?type=tips").then(function (status) {
        page.property("content").then(function (content) {
          const { window } = new JSDOM(content);
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
