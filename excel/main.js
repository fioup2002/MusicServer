var data = {
  productTable: [],
};

const Excel = require("exceljs");
const fs = require("fs");
//寫入
// const workbook = new Excel.Workbook();
// const worksheet = workbook.addWorksheet("工作表");
// // add column headers
// worksheet.columns = [{ header: "中文名稱" }, { header: "英文名稱" }, { header: "類型" }, { header: "是否在選單" }, { header: "最低手數" }, { header: "貨幣單位" }, { header: "合約規格" }, { header: "單筆交易手數" }, { header: "日内初始保证金" }, {}, {}, {}, { header: "日内强平保证金" }, {}, {}, {}, { header: "周末/假期强平保证金" }, {}, {}, {}, { header: "交易時間" }];
// worksheet.columns.forEach((obj, i) => {
//   obj.width = 15;
//   if (i == 11 || i == 15 || i == 19 || i == worksheet.columns.length - 1) {
//     obj.width = 40;
//   }
//   obj.alignment = { vertical: "middle", horizontal: "center", wrapText: true };
// });
// worksheet.mergeCells(1, 9, 1, 12);
// worksheet.mergeCells(1, 13, 1, 16);
// worksheet.mergeCells(1, 17, 1, 20);
// data.productTable.forEach((obj, i) => {
//   var content = obj.detail.content;
//   var deposit = content.deposit;
//   worksheet.addRow([obj.name.ch, obj.name.en, obj.type, obj.isInCheckbox ? "V" : "", content.minTrade, content.currency, content.spec, content.singleTrade, "最低", "最高", "獲利", "文字", "最低", "最高", "獲利", "文字", "最低", "最高", "獲利", "文字", content.tradeTime]);
//   if (deposit != undefined) {
//     worksheet.addRow([, , , , , , , , , deposit[0][0].min, deposit[0][0].max, deposit[0][0].profit, deposit[0][0].text, deposit[1][0].min, deposit[1][0].max, deposit[1][0].profit, deposit[1][0].text, deposit[2][0].min, deposit[2][0].max, deposit[2][0].profit, deposit[2][0].text]);
//     worksheet.addRow([, , , , , , , , , deposit[0][1].min, deposit[0][1].max, deposit[0][1].profit, deposit[0][1].text, deposit[1][1].min, deposit[1][1].max, deposit[1][1].profit, deposit[1][1].text, deposit[2][1].min, deposit[2][1].max, deposit[2][1].profit, deposit[2][1].text]);
//     worksheet.addRow([, , , , , , , , , deposit[0][2].min, deposit[0][2].max, deposit[0][2].profit, deposit[0][2].text, deposit[1][2].min, deposit[1][2].max, deposit[1][2].profit, deposit[1][2].text, deposit[2][2].min, deposit[2][2].max, deposit[2][2].profit, deposit[2][2].text]);
//   }
//   for (var j = 1; j <= 8; j++) {
//     worksheet.mergeCells(4 * i + 2, j, 4 * i + 5, j);
//   }
//   worksheet.mergeCells(4 * i + 2, 21, 4 * i + 5, 21);
// });

// workbook.xlsx.writeFile("前端用表格.xlsx");

//讀取
const workbook = new Excel.Workbook();

workbook.xlsx.readFile("前端用表格.xlsx").then(function () {
  var worksheet = workbook.getWorksheet(2);
  var obj = new Object();
  obj.market = new Object();
  var detail = new Object();
  detail.isSelected = false;
  var content = new Object();
  content.deposit = new Array(3);
  worksheet.eachRow(function (row, rowNumber) {
    //略過第一行
    if (rowNumber > 1) {
      //基本資訊欄
      if (rowNumber % 4 == 2) {
        obj = new Object();
        obj.market = new Object();
        detail = new Object();
        detail.isSelected = false;
        content = new Object();
        content.deposit = new Array(3);
        var name = new Object();
        row.eachCell(function (cell, colNumber) {
          switch (colNumber) {
            case 1: {
              name.ch = cell.value;
              break;
            }
            case 2: {
              name.en = cell.value;
              break;
            }
            case 3: {
              obj.type = cell.value;
              break;
            }
            case 4: {
              if (cell.value == "V") {
                obj.isInCheckbox = true;
              } else {
                obj.isInCheckbox = false;
              }
              break;
            }
            case 5: {
              content.minTrade = cell.value;
              break;
            }
            case 6: {
              content.currency = cell.value;
              break;
            }
            case 7: {
              content.spec = cell.value;
              break;
            }
            case 8: {
              content.singleTrade = cell.value;
              break;
            }
            case 21: {
              content.tradeTime = cell.value;
              break;
            }
          }
          obj.name = name;
        });
      } else if (rowNumber % 4 == 3 || rowNumber % 4 == 0 || rowNumber % 4 == 1) {
        var deposit = new Object();
        if (rowNumber % 4 == 3) {
          content.deposit[0] = new Array();
          content.deposit[1] = new Array();
          content.deposit[2] = new Array();
        }
        row.eachCell(function (cell, colNumber) {
          switch (colNumber) {
            case 9: {
              deposit.min = cell.value;
              break;
            }
            case 10: {
              deposit.max = cell.value;
              break;
            }
            case 11: {
              deposit.profit = cell.value;
              break;
            }
            case 12: {
              deposit.text = cell.value;
              content.deposit[0].push(JSON.parse(JSON.stringify(deposit)));
              break;
            }
            case 13: {
              deposit.min = cell.value;
              break;
            }
            case 14: {
              deposit.max = cell.value;
              break;
            }
            case 15: {
              deposit.profit = cell.value;
              break;
            }
            case 16: {
              deposit.text = cell.value;
              content.deposit[1].push(JSON.parse(JSON.stringify(deposit)));
              break;
            }
            case 17: {
              deposit.min = cell.value;
              break;
            }
            case 18: {
              deposit.max = cell.value;
              break;
            }
            case 19: {
              deposit.profit = cell.value;
              break;
            }
            case 20: {
              deposit.text = cell.value;
              content.deposit[2].push(JSON.parse(JSON.stringify(deposit)));
              break;
            }
          }
        });
        if (rowNumber % 4 == 1) {
          //結束時，要將欄位補上
          detail.content = content;
          obj.detail = detail;
        }
      }
      if (rowNumber % 4 == 1) {
        data.productTable.push(JSON.parse(JSON.stringify(obj)));
      }
    }
  });
  let input = JSON.stringify(data.productTable);
  fs.writeFileSync("result.json", input);
});
