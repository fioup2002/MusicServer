var data = {
  productTable: [
    {
      name: { ch: "现货黄金", en: "XAUUSD" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~30手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 5, profit: 500, text: "层級保证金<br>(0-5手)500<br/>" },
              { min: 5.01, max: 60, profit: 1000, text: "(5.01-60手)1000<br/>" },
              { min: 60.01, max: 180, profit: 2500, text: "(60.01-180手)2500<br/>" },
              { min: 180.01, max: null, profit: 4000, text: "(180.01手以上)4000" },
            ],
            [
              { min: 0, max: 5, profit: 100, text: "层級保证金<br>(0-5手)100<br/>" },
              { min: 5.01, max: 60, profit: 200, text: "(5.01-60手)200<br/>" },
              { min: 60.01, max: 180, profit: 500, text: "(60.01-180手)500<br/>" },
              { min: 180.01, max: null, profit: 800, text: "(180.01手以上)800" },
            ],
            [
              { min: 0, max: 5, profit: 500, text: "层級保证金<br>(0-5手)500<br/>" },
              { min: 5.01, max: 60, profit: 1000, text: "(5.01-60手)1000<br/>" },
              { min: 60.01, max: 180, profit: 2500, text: "(60.01-180手)2500<br/>" },
              { min: 180.01, max: null, profit: 4000, text: "(180.01手以上)4000" },
            ],
          ],
        },
      },
      type: "commodities",
      isInCheckbox: true,
    },
    {
      name: { ch: "现货白银", en: "XAGUSD" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "5000",
          singleTrade: "0.01手~30手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 3, profit: 500, text: "层級保证金<br>(0-3手)500<br/>" },
              { min: 3.01, max: 15, profit: 1000, text: "(3.01-15手)1000<br/>" },
              { min: 15.01, max: 30, profit: 2000, text: "(15.01-30手)2000<br/>" },
              { min: 30.01, max: null, profit: 3500, text: "(30.01手以上)3500" },
            ],
            [
              { min: 0, max: 3, profit: 100, text: "层級保证金<br>(0-3手)100<br/>" },
              { min: 3.01, max: 15, profit: 200, text: "(3.01-15手)200<br/>" },
              { min: 15.01, max: 30, profit: 400, text: "(15.01-30手)400<br/>" },
              { min: 30.01, max: null, profit: 700, text: "(30.01手以上)700" },
            ],
            [
              { min: 0, max: 3, profit: 500, text: "层級保证金<br>(0-3手)500<br/>" },
              { min: 3.01, max: 15, profit: 1000, text: "(3.01-15手)1000<br/>" },
              { min: 15.01, max: 30, profit: 2000, text: "(15.01-30手)2000<br/>" },
              { min: 30.01, max: null, profit: 3500, text: "(30.01手以上)3500" },
            ],
          ],
        },
      },
      type: "commodities",
      isInCheckbox: true,
    },
    {
      name: { ch: "美国原油", en: "USOil" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "1000",
          singleTrade: "0.01手~20手",
          tradeTime: "夏令：周一06:00至周六04:45<br>冬令：周一07:00至周六05:45",
          deposit: [
            [
              { min: 0, max: 5, profit: 300, text: "层級保证金<br>(0-5手)300<br/>" },
              { min: 5.01, max: 20, profit: 750, text: "(5.01-20手)750<br/>" },
              { min: 20.01, max: 50, profit: 1500, text: "(20.01-50手)1500<br/>" },
              { min: 50, max: null, profit: 3000, text: "(50手以上)3000" },
            ],
            [
              { min: 0, max: 5, profit: 60, text: "层級保证金<br>(0-5手)60<br/>" },
              { min: 5.01, max: 20, profit: 150, text: "(5.01-20手)150<br/>" },
              { min: 20.01, max: 50, profit: 300, text: "(20.01-50手)300<br/>" },
              { min: 50, max: null, profit: 600, text: "(50手以上)600" },
            ],
            [
              { min: 0, max: 5, profit: 600, text: "层級保证金<br>(0-5手)600<br/>" },
              { min: 5.01, max: 20, profit: 1500, text: "(5.01-20手)1500<br/>" },
              { min: 20.01, max: 50, profit: 3000, text: "(20.01-50手)3000<br/>" },
              { min: 50, max: null, profit: 6000, text: "(50手以上)6000" },
            ],
          ],
        },
      },
      type: "commodities",
      isInCheckbox: true,
    },
    {
      name: { ch: "英国原油", en: "UKOil" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "1000",
          singleTrade: "0.01手~20手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 5, profit: 300, text: "层級保证金<br>(0-5手)300<br/>" },
              { min: 5.01, max: 20, profit: 750, text: "(5.01-20手)750<br/>" },
              { min: 20.01, max: 50, profit: 1500, text: "(20.01-50手)1500<br/>" },
              { min: 50, max: null, profit: 3000, text: "(50手以上)3000" },
            ],
            [
              { min: 0, max: 5, profit: 60, text: "层級保证金<br>(0-5手)60<br/>" },
              { min: 5.01, max: 20, profit: 150, text: "(5.01-20手)150<br/>" },
              { min: 20.01, max: 50, profit: 300, text: "(20.01-50手)300<br/>" },
              { min: 50, max: null, profit: 600, text: "(50手以上)600" },
            ],
            [
              { min: 0, max: 5, profit: 600, text: "层級保证金<br>(0-5手)600<br/>" },
              { min: 5.01, max: 20, profit: 1500, text: "(5.01-20手)1500<br/>" },
              { min: 20.01, max: 50, profit: 3000, text: "(20.01-50手)3000<br/>" },
              { min: 50, max: null, profit: 6000, text: "(50手以上)6000" },
            ],
          ],
        },
      },
      type: "commodities",
      isInCheckbox: true,
    },
    {
      name: { ch: "天然气", en: "NGAS" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "10000",
          singleTrade: "0.01手~10手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 5, profit: 300, text: "层級保证金<br>(0-5手)300<br/>" },
              { min: 5.01, max: 20, profit: 750, text: "(5.01-20手)750<br/>" },
              { min: 20.01, max: 50, profit: 1500, text: "(20.01-50手)1500<br/>" },
              { min: 50, max: null, profit: 3000, text: "(50手以上)3000" },
            ],
            [
              { min: 0, max: 5, profit: 60, text: "层級保证金<br>(0-5手)60<br/>" },
              { min: 5.01, max: 20, profit: 150, text: "(5.01-20手)150<br/>" },
              { min: 20.01, max: 50, profit: 300, text: "(20.01-50手)300<br/>" },
              { min: 50, max: null, profit: 600, text: "(50手以上)600" },
            ],
            [
              { min: 0, max: 5, profit: 600, text: "层級保证金<br>(0-5手)600<br/>" },
              { min: 5.01, max: 20, profit: 1500, text: "(5.01-20手)1500<br/>" },
              { min: 20.01, max: 50, profit: 3000, text: "(20.01-50手)3000<br/>" },
              { min: 50, max: null, profit: 6000, text: "(50手以上)6000" },
            ],
          ],
        },
      },
      type: "commodities",
      isInCheckbox: true,
    },
    {
      name: { ch: "可可", en: "COCOA" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "20",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一16:45至周六01:30<br>冬令：周一17:45至周六02:30",
          deposit: [
            [
              { min: 0, max: 10, profit: 500, text: "层級保证金<br>(0-10手)500<br/>" },
              { min: 10.01, max: 30, profit: 1000, text: "(10.01-30手)1000<br/>" },
              { min: 30.01, max: 50, profit: 2000, text: "(30.01-50手)2000<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 100, text: "层級保证金<br>(0-10手)100<br/>" },
              { min: 10.01, max: 30, profit: 200, text: "(10.01-30手)200<br/>" },
              { min: 30.01, max: 50, profit: 400, text: "(30.01-50手)400<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1000, text: "层級保证金<br>(0-10手)1000<br/>" },
              { min: 10.01, max: 30, profit: 2000, text: "(10.01-30手)2000<br/>" },
              { min: 30.01, max: 50, profit: 4000, text: "(30.01-50手)4000<br/>" },
            ],
          ],
        },
      },
      type: "commodities",
      isInCheckbox: false,
    },
    {
      name: { ch: "玉米", en: "CORN" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一08:00至周五20:45周五21:30至翌日02:20<br>冬令：周一09:00至周五21:45周五22:30至翌日03:20",
          deposit: [
            [
              { min: 0, max: 10, profit: 500, text: "层級保证金<br>(0-10手)500<br/>" },
              { min: 10.01, max: 30, profit: 1000, text: "(10.01-30手)1000<br/>" },
              { min: 30.01, max: 50, profit: 2000, text: "(30.01-50手)2000<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 100, text: "层級保证金<br>(0-10手)100<br/>" },
              { min: 10.01, max: 30, profit: 200, text: "(10.01-30手)200<br/>" },
              { min: 30.01, max: 50, profit: 400, text: "(30.01-50手)400<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1000, text: "层級保证金<br>(0-10手)1000<br/>" },
              { min: 10.01, max: 30, profit: 2000, text: "(10.01-30手)2000<br/>" },
              { min: 30.01, max: 50, profit: 4000, text: "(30.01-50手)4000<br/>" },
            ],
          ],
        },
      },
      type: "commodities",
      isInCheckbox: false,
    },
    {
      name: { ch: "大豆", en: "SOYBEAN" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "50",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一08:00至周五20:45周五21:30至翌日02:20<br>冬令：周一09:00至周五21:45周五22:30至翌日03:20",
          deposit: [
            [
              { min: 0, max: 10, profit: 600, text: "层級保证金<br>(0-10手)600<br/>" },
              { min: 10.01, max: 30, profit: 1200, text: "(10.01-30手)1200<br/>" },
              { min: 30.01, max: 50, profit: 2400, text: "(30.01-50手)2400<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 120, text: "层級保证金<br>(0-10手)120<br/>" },
              { min: 10.01, max: 30, profit: 240, text: "(10.01-30手)240<br/>" },
              { min: 30.01, max: 50, profit: 480, text: "(30.01-50手)480<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1200, text: "层級保证金<br>(0-10手)1200<br/>" },
              { min: 10.01, max: 30, profit: 2400, text: "(10.01-30手)2400<br/>" },
              { min: 30.01, max: 50, profit: 4800, text: "(30.01-50手)4800<br/>" },
            ],
          ],
        },
      },
      type: "commodities",
      isInCheckbox: false,
    },
    {
      name: { ch: "小麦", en: "WHEAT" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一08:00至周五20:45周五21:30至翌日02:20<br>冬令：周一09:00至周五21:45周五22:30至翌日03:20",
          deposit: [
            [
              { min: 0, max: 10, profit: 500, text: "层級保证金<br>(0-10手)500<br/>" },
              { min: 10.01, max: 30, profit: 1000, text: "(10.01-30手)1000<br/>" },
              { min: 30.01, max: 50, profit: 2000, text: "(30.01-50手)2000<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 100, text: "层級保证金<br>(0-10手)100<br/>" },
              { min: 10.01, max: 30, profit: 200, text: "(10.01-30手)200<br/>" },
              { min: 30.01, max: 50, profit: 400, text: "(30.01-50手)400<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1000, text: "层級保证金<br>(0-10手)1000<br/>" },
              { min: 10.01, max: 30, profit: 2000, text: "(10.01-30手)2000<br/>" },
              { min: 30.01, max: 50, profit: 4000, text: "(30.01-50手)4000<br/>" },
            ],
          ],
        },
      },
      type: "commodities",
      isInCheckbox: false,
    },
    {
      name: { ch: "铜", en: "COPPER" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "星期一6:00-星期六4:45<br>停市時段: 每日5:00-6:00",
          deposit: [
            [
              { min: 0.01, max: 10, profit: 300, text: "(0.01-10手)300<br/>" },
              { min: 10.01, max: 30, profit: 600, text: "(10.01-30手)600<br/>" },
              { min: 30.01, max: null, profit: 1200, text: "(30.01手以上)1200" },
            ],
            [
              { min: 0.01, max: 10, profit: 60, text: "(0.01-10手)60<br/>" },
              { min: 10.01, max: 30, profit: 120, text: "(10.01-30手)120<br/>" },
              { min: 30.01, max: null, profit: 240, text: "(30.01手以上)240" },
            ],
            [
              { min: 0.01, max: 10, profit: 600, text: "(0.01-10手)600<br/>" },
              { min: 10.01, max: 30, profit: 1200, text: "(10.01-30手)1200<br/>" },
              { min: 30.01, max: null, profit: 2400, text: "(30.01手以上)2400" },
            ],
          ],
        },
      },
      type: "commodities",
      isInCheckbox: true,
    },
    {
      name: { ch: "铂金", en: "PLT" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "50",
          singleTrade: "0.01手~20手",
          tradeTime: "星期一6:00-星期六4:45<br>停市時段: 每日5:00-6:00",
          deposit: [
            [
              { min: 0.01, max: 10, profit: 500, text: "(0.01-10手)500<br/>" },
              { min: 10.01, max: 30, profit: 1000, text: "(10.01-30手)1000<br/>" },
              { min: 30.01, max: null, profit: 2000, text: "(30.01手以上)2000" },
            ],
            [
              { min: 0.01, max: 10, profit: 100, text: "(0.01-10手)100<br/>" },
              { min: 10.01, max: 30, profit: 200, text: "(10.01-30手)200<br/>" },
              { min: 30.01, max: null, profit: 400, text: "(30.01手以上)400" },
            ],
            [
              { min: 0.01, max: 10, profit: 1000, text: "(0.01-10手)1000<br/>" },
              { min: 10.01, max: 30, profit: 2000, text: "(10.01-30手)2000<br/>" },
              { min: 30.01, max: null, profit: 4000, text: "(30.01手以上)4000" },
            ],
          ],
        },
      },
      type: "commodities",
      isInCheckbox: false,
    },
    {
      name: { ch: "钯金", en: "PAD" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "10",
          singleTrade: "0.01手~20手",
          tradeTime: "星期一6:00-星期六4:45<br>停市時段: 每日5:00-6:00",
          deposit: [
            [
              { min: 0.01, max: 10, profit: 1000, text: "(0.01-10手)1000<br/>" },
              { min: 10.01, max: 30, profit: 2000, text: "(10.01-30手)2000<br/>" },
              { min: 30.01, max: null, profit: 4000, text: "(30.01手以上)4000" },
            ],
            [
              { min: 0.01, max: 10, profit: 200, text: "(0.01-10手)200<br/>" },
              { min: 10.01, max: 30, profit: 400, text: "(10.01-30手)400<br/>" },
              { min: 30.01, max: null, profit: 800, text: "(30.01手以上)800" },
            ],
            [
              { min: 0.01, max: 10, profit: 2000, text: "(0.01-10手)2000<br/>" },
              { min: 10.01, max: 30, profit: 4000, text: "(10.01-30手)4000<br/>" },
              { min: 30.01, max: null, profit: 8000, text: "(30.01手以上)8000" },
            ],
          ],
        },
      },
      type: "commodities",
      isInCheckbox: false,
    },
    {
      name: { ch: "美国TECH100", en: "TECH100" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "20",
          singleTrade: "0.01手~10手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 10, profit: 700, text: "层級保证金<br>(0-10手)700<br/>" },
              { min: 10.01, max: 20, profit: 1400, text: "(10.01-20手)1400<br/>" },
              { min: 20.01, max: 100, profit: 2800, text: "(20.01-100手)2800<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 140, text: "层級保证金<br>(0-10手)140<br/>" },
              { min: 10.01, max: 20, profit: 280, text: "(10.01-20手)280<br/>" },
              { min: 20.01, max: 100, profit: 560, text: "(20.01-100手)560<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1400, text: "层級保证金<br>(0-10手)1400<br/>" },
              { min: 10.01, max: 20, profit: 2800, text: "(10.01-20手)2800<br/>" },
              { min: 20.01, max: 100, profit: 5600, text: "(20.01-100手)5600<br/>" },
            ],
          ],
        },
      },
      type: "indexes",
      isInCheckbox: true,
    },
    {
      name: { ch: "香港50", en: "HK50" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "2",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天09:15-翌日03:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 200, text: "层級保证金<br>(0-10手)200<br/>" },
              { min: 10.01, max: 20, profit: 500, text: "(10.01-20手)500<br/>" },
              { min: 20.01, max: 100, profit: 1000, text: "(20.01-100手)1000<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 40, text: "层級保证金<br>(0-10手)40<br/>" },
              { min: 10.01, max: 20, profit: 100, text: "(10.01-20手)100<br/>" },
              { min: 20.01, max: 100, profit: 200, text: "(20.01-100手)200<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 400, text: "层級保证金<br>(0-10手)400<br/>" },
              { min: 10.01, max: 20, profit: 1000, text: "(10.01-20手)1000<br/>" },
              { min: 20.01, max: 100, profit: 2000, text: "(20.01-100手)2000<br/>" },
            ],
          ],
        },
      },
      type: "indexes",
      isInCheckbox: true,
    },
    {
      name: { ch: "美国DJ30", en: "DJ30" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "5",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一06:00至周六04:15<br>冬令：周一07:00至周六05:15",
          deposit: [
            [
              { min: 0, max: 10, profit: 700, text: "层級保证金<br>(0-10手)700<br/>" },
              { min: 10.01, max: 20, profit: 1400, text: "(10.01-20手)1400<br/>" },
              { min: 20.01, max: 100, profit: 2800, text: "(20.01-100手)2800<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 140, text: "层級保证金<br>(0-10手)140<br/>" },
              { min: 10.01, max: 20, profit: 280, text: "(10.01-20手)280<br/>" },
              { min: 20.01, max: 100, profit: 560, text: "(20.01-100手)560<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1400, text: "层級保证金<br>(0-10手)1400<br/>" },
              { min: 10.01, max: 20, profit: 2800, text: "(10.01-20手)2800<br/>" },
              { min: 20.01, max: 100, profit: 5600, text: "(20.01-100手)5600<br/>" },
            ],
          ],
        },
      },
      type: "indexes",
      isInCheckbox: true,
    },
    {
      name: { ch: "中华300", en: "CHINA300" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "10",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一09:30至周五15:00<br>冬令：周一09:30至周五15:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 200, text: "层級保证金<br>(0-10手)200<br/>" },
              { min: 10.01, max: 20, profit: 500, text: "(10.01-20手)500<br/>" },
              { min: 20.01, max: 100, profit: 1000, text: "(20.01-100手)1000<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 40, text: "层級保证金<br>(0-10手)40<br/>" },
              { min: 10.01, max: 20, profit: 100, text: "(10.01-20手)100<br/>" },
              { min: 20.01, max: 100, profit: 200, text: "(20.01-100手)200<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 400, text: "层級保证金<br>(0-10手)400<br/>" },
              { min: 10.01, max: 20, profit: 1000, text: "(10.01-20手)1000<br/>" },
              { min: 20.01, max: 100, profit: 2000, text: "(20.01-100手)2000<br/>" },
            ],
          ],
        },
      },
      type: "indexes",
      isInCheckbox: true,
    },
    {
      name: { ch: "德国GER30", en: "GER30" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "10",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周六每天14:00至翌日04:00<br>冬令：周一至周六每天15:00至翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 500, text: "层級保证金<br>(0-10手)500<br/>" },
              { min: 10.01, max: 20, profit: 1000, text: "(10.01-20手)1000<br/>" },
              { min: 20.01, max: 100, profit: 2000, text: "(20.01-100手)2000<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 100, text: "层級保证金<br>(0-10手)100<br/>" },
              { min: 10.01, max: 20, profit: 200, text: "(10.01-20手)200<br/>" },
              { min: 20.01, max: 100, profit: 400, text: "(20.01-100手)400<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1000, text: "层級保证金<br>(0-10手)1000<br/>" },
              { min: 10.01, max: 20, profit: 2000, text: "(10.01-20手)2000<br/>" },
              { min: 20.01, max: 100, profit: 4000, text: "(20.01-100手)4000<br/>" },
            ],
          ],
        },
      },
      type: "indexes",
      isInCheckbox: true,
    },
    {
      name: { ch: "美国SP500", en: "SP500" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "50",
          singleTrade: "0.01手~10手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 10, profit: 700, text: "层級保证金<br>(0-10手)700<br/>" },
              { min: 10.01, max: 20, profit: 1400, text: "(10.01-20手)1400<br/>" },
              { min: 20.01, max: 100, profit: 2800, text: "(20.01-100手)2800<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 140, text: "层級保证金<br>(0-10手)140<br/>" },
              { min: 10.01, max: 20, profit: 280, text: "(10.01-20手)280<br/>" },
              { min: 20.01, max: 100, profit: 560, text: "(20.01-100手)560<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1400, text: "层級保证金<br>(0-10手)1400<br/>" },
              { min: 10.01, max: 20, profit: 2800, text: "(10.01-20手)2800<br/>" },
              { min: 20.01, max: 100, profit: 5600, text: "(20.01-100手)5600<br/>" },
            ],
          ],
        },
      },
      type: "indexes",
      isInCheckbox: true,
    },
    {
      name: { ch: "美汇指数", en: "USDINDEX" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "1000",
          singleTrade: "0.01手~5手",
          tradeTime: "夏令：周一06:00至周六04:45<br>冬令：周一07:00至周六05:45",
          deposit: [
            [
              { min: 0, max: 10, profit: 250, text: "层級保证金<br>(0-10手)250<br/>" },
              { min: 10.01, max: 20, profit: 500, text: "(10.01-20手)500<br/>" },
              { min: 20.01, max: 100, profit: 1000, text: "(20.01-100手)1000<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 50, text: "层級保证金<br>(0-10手)50<br/>" },
              { min: 10.01, max: 20, profit: 100, text: "(10.01-20手)100<br/>" },
              { min: 20.01, max: 100, profit: 200, text: "(20.01-100手)200<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 500, text: "层級保证金<br>(0-10手)500<br/>" },
              { min: 10.01, max: 20, profit: 1000, text: "(10.01-20手)1000<br/>" },
              { min: 20.01, max: 100, profit: 2000, text: "(20.01-100手)2000<br/>" },
            ],
          ],
        },
      },
      type: "indexes",
      isInCheckbox: false,
    },
    {
      name: { ch: "日本JPN225", en: "JPN225" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "2",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一07:30至周六04:15<br>冬令：周一07:30至周六04:15",
          deposit: [
            [
              { min: 0, max: 10, profit: 200, text: "层級保证金<br>(0-10手)200<br/>" },
              { min: 10.01, max: 20, profit: 500, text: "(10.01-20手)500<br/>" },
              { min: 20.01, max: 100, profit: 1000, text: "(20.01-100手)1000<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 40, text: "层級保证金<br>(0-10手)40<br/>" },
              { min: 10.01, max: 20, profit: 100, text: "(10.01-20手)100<br/>" },
              { min: 20.01, max: 100, profit: 200, text: "(20.01-100手)200<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 400, text: "层級保证金<br>(0-10手)400<br/>" },
              { min: 10.01, max: 20, profit: 1000, text: "(10.01-20手)1000<br/>" },
              { min: 20.01, max: 100, profit: 2000, text: "(20.01-100手)2000<br/>" },
            ],
          ],
        },
      },
      type: "indexes",
      isInCheckbox: false,
    },
    {
      name: { ch: "英国UK100", en: "UK100" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "10",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周六每天08:00至翌日04:00<br>冬令：周一至周六每天09:00至翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 250, text: "层級保证金<br>(0-10手)250<br/>" },
              { min: 10.01, max: 20, profit: 500, text: "(10.01-20手)500<br/>" },
              { min: 20.01, max: 100, profit: 1000, text: "(20.01-100手)1000<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 50, text: "层級保证金<br>(0-10手)50<br/>" },
              { min: 10.01, max: 20, profit: 100, text: "(10.01-20手)100<br/>" },
              { min: 20.01, max: 100, profit: 200, text: "(20.01-100手)200<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 500, text: "层級保证金<br>(0-10手)500<br/>" },
              { min: 10.01, max: 20, profit: 1000, text: "(10.01-20手)1000<br/>" },
              { min: 20.01, max: 100, profit: 2000, text: "(20.01-100手)2000<br/>" },
            ],
          ],
        },
      },
      type: "indexes",
      isInCheckbox: false,
    },
    {
      name: { ch: "法国FRA40", en: "FRA40" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "20",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周六每天14:00至翌日04:00<br>冬令：周一至周六每天15:00至翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 1000, text: "层級保证金<br>(0-10手)1000<br/>" },
              { min: 10.01, max: 20, profit: 2000, text: "(10.01-20手)2000<br/>" },
              { min: 20.01, max: 100, profit: 4000, text: "(20.01-100手)4000<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 200, text: "层級保证金<br>(0-10手)200<br/>" },
              { min: 10.01, max: 20, profit: 400, text: "(10.01-20手)400<br/>" },
              { min: 20.01, max: 100, profit: 800, text: "(20.01-100手)800<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 2000, text: "层級保证金<br>(0-10手)2000<br/>" },
              { min: 10.01, max: 20, profit: 4000, text: "(10.01-20手)4000<br/>" },
              { min: 20.01, max: 100, profit: 8000, text: "(20.01-100手)8000<br/>" },
            ],
          ],
        },
      },
      type: "indexes",
      isInCheckbox: false,
    },
    {
      name: { ch: "欧元美元", en: "EURUSD" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 50, profit: 200, text: "层級保证金<br>(0-50手)200<br/>" },
              { min: 50.01, max: 80, profit: 300, text: "(50.01-80手)300<br/>" },
              { min: 80, max: null, profit: 400, text: "(80手以上)400" },
            ],
            [
              { min: 0, max: 50, profit: 40, text: "层級保证金<br>(0-50手)40<br/>" },
              { min: 50.01, max: 80, profit: 60, text: "(50.01-80手)60<br/>" },
              { min: 80, max: null, profit: 80, text: "(80手以上)80" },
            ],
            [
              { min: 0, max: 50, profit: 400, text: "层級保证金<br>(0-50手)400<br/>" },
              { min: 50.01, max: 80, profit: 600, text: "(50.01-80手)600<br/>" },
              { min: 80, max: null, profit: 800, text: "(80手以上)800" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: true,
    },
    {
      name: { ch: "美元日元", en: "USDJPY" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 50, profit: 200, text: "层級保证金<br>(0-50手)200<br/>" },
              { min: 50.01, max: 80, profit: 300, text: "(50.01-80手)300<br/>" },
              { min: 80, max: null, profit: 400, text: "(80手以上)400" },
            ],
            [
              { min: 0, max: 50, profit: 40, text: "层級保证金<br>(0-50手)40<br/>" },
              { min: 50.01, max: 80, profit: 60, text: "(50.01-80手)60<br/>" },
              { min: 80, max: null, profit: 80, text: "(80手以上)80" },
            ],
            [
              { min: 0, max: 50, profit: 400, text: "层級保证金<br>(0-50手)400<br/>" },
              { min: 50.01, max: 80, profit: 600, text: "(50.01-80手)600<br/>" },
              { min: 80, max: null, profit: 800, text: "(80手以上)800" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: true,
    },
    {
      name: { ch: "英镑美元", en: "GBPUSD" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "夏令：周一06:00至周六04:45<br>冬令：周一07:00至周六05:45",
          deposit: [
            [
              { min: 0, max: 50, profit: 400, text: "层級保证金<br>(0-50手)400<br/>" },
              { min: 50.01, max: 80, profit: 600, text: "(50.01-80手)600<br/>" },
              { min: 80, max: null, profit: 800, text: "(80手以上)800" },
            ],
            [
              { min: 0, max: 50, profit: 80, text: "层級保证金<br>(0-50手)80<br/>" },
              { min: 50.01, max: 80, profit: 120, text: "(50.01-80手)120<br/>" },
              { min: 80, max: null, profit: 160, text: "(80手以上)160" },
            ],
            [
              { min: 0, max: 50, profit: 800, text: "层級保证金<br>(0-50手)800<br/>" },
              { min: 50.01, max: 80, profit: 1200, text: "(50.01-80手)1200<br/>" },
              { min: 80, max: null, profit: 1600, text: "(80手以上)1600" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: true,
    },
    {
      name: { ch: "美元加元", en: "USDCAD" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 50, profit: 200, text: "层級保证金<br>(0-50手)200<br/>" },
              { min: 50.01, max: 80, profit: 300, text: "(50.01-80手)300<br/>" },
              { min: 80, max: null, profit: 400, text: "(80手以上)400" },
            ],
            [
              { min: 0, max: 50, profit: 40, text: "层級保证金<br>(0-50手)40<br/>" },
              { min: 50.01, max: 80, profit: 60, text: "(50.01-80手)60<br/>" },
              { min: 80, max: null, profit: 80, text: "(80手以上)80" },
            ],
            [
              { min: 0, max: 50, profit: 400, text: "层級保证金<br>(0-50手)400<br/>" },
              { min: 50.01, max: 80, profit: 600, text: "(50.01-80手)600<br/>" },
              { min: 80, max: null, profit: 800, text: "(80手以上)800" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: true,
    },
    {
      name: { ch: "澳元美元", en: "AUDUSD" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 50, profit: 200, text: "层級保证金<br>(0-50手)200<br/>" },
              { min: 50.01, max: 80, profit: 300, text: "(50.01-80手)300<br/>" },
              { min: 80, max: null, profit: 400, text: "(80手以上)400" },
            ],
            [
              { min: 0, max: 50, profit: 40, text: "层級保证金<br>(0-50手)40<br/>" },
              { min: 50.01, max: 80, profit: 60, text: "(50.01-80手)60<br/>" },
              { min: 80, max: null, profit: 80, text: "(80手以上)80" },
            ],
            [
              { min: 0, max: 50, profit: 400, text: "层級保证金<br>(0-50手)400<br/>" },
              { min: 50.01, max: 80, profit: 600, text: "(50.01-80手)600<br/>" },
              { min: 80, max: null, profit: 800, text: "(80手以上)800" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "英镑日元", en: "GBPJPY" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 50, profit: 400, text: "层級保证金<br>(0-50手)400<br/>" },
              { min: 50.01, max: 80, profit: 600, text: "(50.01-80手)600<br/>" },
              { min: 80, max: null, profit: 800, text: "(80手以上)800" },
            ],
            [
              { min: 0, max: 50, profit: 80, text: "层級保证金<br>(0-50手)80<br/>" },
              { min: 50.01, max: 80, profit: 120, text: "(50.01-80手)120<br/>" },
              { min: 80, max: null, profit: 160, text: "(80手以上)160" },
            ],
            [
              { min: 0, max: 50, profit: 800, text: "层級保证金<br>(0-50手)800<br/>" },
              { min: 50.01, max: 80, profit: 1200, text: "(50.01-80手)1200<br/>" },
              { min: 80, max: null, profit: 1600, text: "(80手以上)1600" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "美元瑞郎", en: "USDCHF" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 50, profit: 400, text: "层級保证金<br>(0-50手)400<br/>" },
              { min: 50.01, max: 80, profit: 600, text: "(50.01-80手)600<br/>" },
              { min: 80, max: null, profit: 800, text: "(80手以上)800" },
            ],
            [
              { min: 0, max: 50, profit: 80, text: "层級保证金<br>(0-50手)80<br/>" },
              { min: 50.01, max: 80, profit: 120, text: "(50.01-80手)120<br/>" },
              { min: 80, max: null, profit: 160, text: "(80手以上)160" },
            ],
            [
              { min: 0, max: 50, profit: 800, text: "层級保证金<br>(0-50手)800<br/>" },
              { min: 50.01, max: 80, profit: 1200, text: "(50.01-80手)1200<br/>" },
              { min: 80, max: null, profit: 1600, text: "(80手以上)1600" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "澳元日元", en: "AUDJPY" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 50, profit: 200, text: "层級保证金<br>(0-50手)200<br/>" },
              { min: 50.01, max: 80, profit: 300, text: "(50.01-80手)300<br/>" },
              { min: 80, max: null, profit: 400, text: "(80手以上)400" },
            ],
            [
              { min: 0, max: 50, profit: 40, text: "层級保证金<br>(0-50手)40<br/>" },
              { min: 50.01, max: 80, profit: 60, text: "(50.01-80手)60<br/>" },
              { min: 80, max: null, profit: 80, text: "(80手以上)80" },
            ],
            [
              { min: 0, max: 50, profit: 400, text: "层級保证金<br>(0-50手)400<br/>" },
              { min: 50.01, max: 80, profit: 600, text: "(50.01-80手)600<br/>" },
              { min: 80, max: null, profit: 800, text: "(80手以上)800" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: true,
    },
    {
      name: { ch: "欧元英镑", en: "EURGBP" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 30, profit: 400, text: "层級保证金<br>(0-30手)400<br/>" },
              { min: 30.01, max: 60, profit: 600, text: "(30.01-60手)600<br/>" },
              { min: 60, max: null, profit: 800, text: "(60手以上)800" },
            ],
            [
              { min: 0, max: 30, profit: 80, text: "层級保证金<br>(0-30手)80<br/>" },
              { min: 30.01, max: 60, profit: 120, text: "(30.01-60手)120<br/>" },
              { min: 60, max: null, profit: 160, text: "(60手以上)160" },
            ],
            [
              { min: 0, max: 30, profit: 800, text: "层級保证金<br>(0-30手)800<br/>" },
              { min: 30.01, max: 60, profit: 1200, text: "(30.01-60手)1200<br/>" },
              { min: 60, max: null, profit: 1600, text: "(60手以上)1600" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "澳元纽元", en: "AUDNZD" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 30, profit: 200, text: "层級保证金<br>(0-30手)200<br/>" },
              { min: 30.01, max: 60, profit: 300, text: "(30.01-60手)300<br/>" },
              { min: 60, max: null, profit: 400, text: "(60手以上)400" },
            ],
            [
              { min: 0, max: 30, profit: 40, text: "层級保证金<br>(0-30手)40<br/>" },
              { min: 30.01, max: 60, profit: 60, text: "(30.01-60手)60<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80" },
            ],
            [
              { min: 0, max: 30, profit: 400, text: "层級保证金<br>(0-30手)400<br/>" },
              { min: 30.01, max: 60, profit: 600, text: "(30.01-60手)600<br/>" },
              { min: 60, max: null, profit: 800, text: "(60手以上)800" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "纽元美元", en: "NZDUSD" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 50, profit: 200, text: "层級保证金<br>(0-50手)200<br/>" },
              { min: 50.01, max: 80, profit: 300, text: "(50.01-80手)300<br/>" },
              { min: 80, max: null, profit: 400, text: "(80手以上)400" },
            ],
            [
              { min: 0, max: 50, profit: 40, text: "层級保证金<br>(0-50手)40<br/>" },
              { min: 50.01, max: 80, profit: 60, text: "(50.01-80手)60<br/>" },
              { min: 80, max: null, profit: 80, text: "(80手以上)80" },
            ],
            [
              { min: 0, max: 50, profit: 400, text: "层級保证金<br>(0-50手)400<br/>" },
              { min: 50.01, max: 80, profit: 600, text: "(50.01-80手)600<br/>" },
              { min: 80, max: null, profit: 800, text: "(80手以上)800" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "欧元瑞郎", en: "EURCHF" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "夏令：周一06:00至周六04:45<br>冬令：周一07:00至周六05:45",
          deposit: [
            [
              { min: 0, max: 30, profit: 400, text: "层級保证金<br>(0-30手)400<br/>" },
              { min: 30.01, max: 60, profit: 600, text: "(30.01-60手)600<br/>" },
              { min: 60, max: null, profit: 800, text: "(60手以上)800" },
            ],
            [
              { min: 0, max: 30, profit: 80, text: "层級保证金<br>(0-30手)80<br/>" },
              { min: 30.01, max: 60, profit: 120, text: "(30.01-60手)120<br/>" },
              { min: 60, max: null, profit: 160, text: "(60手以上)160" },
            ],
            [
              { min: 0, max: 30, profit: 800, text: "层級保证金<br>(0-30手)800<br/>" },
              { min: 30.01, max: 60, profit: 1200, text: "(30.01-60手)1200<br/>" },
              { min: 60, max: null, profit: 1600, text: "(60手以上)1600" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "欧元日元", en: "EURJPY" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 50, profit: 400, text: "层級保证金<br>(0-50手)400<br/>" },
              { min: 50.01, max: 80, profit: 600, text: "(50.01-80手)600<br/>" },
              { min: 80, max: null, profit: 800, text: "(80手以上)800" },
            ],
            [
              { min: 0, max: 50, profit: 80, text: "层級保证金<br>(0-50手)80<br/>" },
              { min: 50.01, max: 80, profit: 120, text: "(50.01-80手)120<br/>" },
              { min: 80, max: null, profit: 160, text: "(80手以上)160" },
            ],
            [
              { min: 0, max: 50, profit: 800, text: "层級保证金<br>(0-50手)800<br/>" },
              { min: 50.01, max: 80, profit: 1200, text: "(50.01-80手)1200<br/>" },
              { min: 80, max: null, profit: 1600, text: "(80手以上)1600" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "欧元澳元", en: "EURAUD" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 30, profit: 400, text: "层級保证金<br>(0-30手)400<br/>" },
              { min: 30.01, max: 60, profit: 600, text: "(30.01-60手)600<br/>" },
              { min: 60, max: null, profit: 800, text: "(60手以上)800" },
            ],
            [
              { min: 0, max: 30, profit: 80, text: "层級保证金<br>(0-30手)80<br/>" },
              { min: 30.01, max: 60, profit: 120, text: "(30.01-60手)120<br/>" },
              { min: 60, max: null, profit: 160, text: "(60手以上)160" },
            ],
            [
              { min: 0, max: 30, profit: 800, text: "层級保证金<br>(0-30手)800<br/>" },
              { min: 30.01, max: 60, profit: 1200, text: "(30.01-60手)1200<br/>" },
              { min: 60, max: null, profit: 1600, text: "(60手以上)1600" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: true,
    },
    {
      name: { ch: "英镑瑞郎", en: "GBPCHF" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "夏令：周一06:00至周六04:45<br>冬令：周一07:00至周六05:45",
          deposit: [
            [
              { min: 0, max: 30, profit: 400, text: "层級保证金<br>(0-30手)400<br/>" },
              { min: 30.01, max: 60, profit: 600, text: "(30.01-60手)600<br/>" },
              { min: 60, max: null, profit: 800, text: "(60手以上)800" },
            ],
            [
              { min: 0, max: 30, profit: 80, text: "层級保证金<br>(0-30手)80<br/>" },
              { min: 30.01, max: 60, profit: 120, text: "(30.01-60手)120<br/>" },
              { min: 60, max: null, profit: 160, text: "(60手以上)160" },
            ],
            [
              { min: 0, max: 30, profit: 800, text: "层級保证金<br>(0-30手)800<br/>" },
              { min: 30.01, max: 60, profit: 1200, text: "(30.01-60手)1200<br/>" },
              { min: 60, max: null, profit: 1600, text: "(60手以上)1600" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "英镑澳元", en: "GBPAUD" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 30, profit: 400, text: "层級保证金<br>(0-30手)400<br/>" },
              { min: 30.01, max: 60, profit: 600, text: "(30.01-60手)600<br/>" },
              { min: 60, max: null, profit: 800, text: "(60手以上)800" },
            ],
            [
              { min: 0, max: 30, profit: 80, text: "层級保证金<br>(0-30手)80<br/>" },
              { min: 30.01, max: 60, profit: 120, text: "(30.01-60手)120<br/>" },
              { min: 60, max: null, profit: 160, text: "(60手以上)160" },
            ],
            [
              { min: 0, max: 30, profit: 800, text: "层級保证金<br>(0-30手)800<br/>" },
              { min: 30.01, max: 60, profit: 1200, text: "(30.01-60手)1200<br/>" },
              { min: 60, max: null, profit: 1600, text: "(60手以上)1600" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "纽元日元", en: "NZDJPY" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "夏令：周一06:00至周六04:45<br>冬令：周一07:00至周六05:45",
          deposit: [
            [
              { min: 0, max: 30, profit: 200, text: "层級保证金<br>(0-30手)200<br/>" },
              { min: 30.01, max: 60, profit: 300, text: "(30.01-60手)300<br/>" },
              { min: 60, max: null, profit: 400, text: "(60手以上)400" },
            ],
            [
              { min: 0, max: 30, profit: 40, text: "层級保证金<br>(0-30手)40<br/>" },
              { min: 30.01, max: 60, profit: 60, text: "(30.01-60手)60<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80" },
            ],
            [
              { min: 0, max: 30, profit: 400, text: "层級保证金<br>(0-30手)400<br/>" },
              { min: 30.01, max: 60, profit: 600, text: "(30.01-60手)600<br/>" },
              { min: 60, max: null, profit: 800, text: "(60手以上)800" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "加元日元", en: "CADJPY" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "",
          deposit: [
            [
              { min: 0, max: 30, profit: 200, text: "层級保证金<br>(0-30手)200<br/>" },
              { min: 30.01, max: 60, profit: 300, text: "(30.01-60手)300<br/>" },
              { min: 60, max: null, profit: 400, text: "(60手以上)400" },
            ],
            [
              { min: 0, max: 30, profit: 40, text: "层級保证金<br>(0-30手)40<br/>" },
              { min: 30.01, max: 60, profit: 60, text: "(30.01-60手)60<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80" },
            ],
            [
              { min: 0, max: 30, profit: 400, text: "层級保证金<br>(0-30手)400<br/>" },
              { min: 30.01, max: 60, profit: 600, text: "(30.01-60手)600<br/>" },
              { min: 60, max: null, profit: 800, text: "(60手以上)800" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "港元离岸人民币", en: "HKDCNH" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "500000",
          singleTrade: "0.01手~100手",
          tradeTime: "夏令：周一08:00至周六04:45<br>冬令：周一08:00至周六05:45",
          deposit: [
            [
              { min: 0, max: 30, profit: 600, text: "层級保证金<br>(0-30手)600<br/>" },
              { min: 30.01, max: 60, profit: 900, text: "(30.01-60手)900<br/>" },
              { min: 60, max: null, profit: 1200, text: "(60手以上)1200" },
            ],
            [
              { min: 0, max: 30, profit: 120, text: "层級保证金<br>(0-30手)120<br/>" },
              { min: 30.01, max: 60, profit: 180, text: "(30.01-60手)180<br/>" },
              { min: 60, max: null, profit: 240, text: "(60手以上)240" },
            ],
            [
              { min: 0, max: 30, profit: 1200, text: "层級保证金<br>(0-30手)1200<br/>" },
              { min: 30.01, max: 60, profit: 1800, text: "(30.01-60手)1800<br/>" },
              { min: 60, max: null, profit: 2400, text: "(60手以上)2400" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "美元离岸人民币", en: "USDCNH" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100000",
          singleTrade: "0.01手~100手",
          tradeTime: "夏令：周一08:00至周六04:45<br>冬令：周一08:00至周六05:45",
          deposit: [
            [
              { min: 0, max: 30, profit: 1000, text: "层級保证金<br>(0-30手)1000<br/>" },
              { min: 30.01, max: 60, profit: 1500, text: "(30.01-60手)1500<br/>" },
              { min: 60, max: null, profit: 2000, text: "(60手以上)2000" },
            ],
            [
              { min: 0, max: 30, profit: 200, text: "层級保证金<br>(0-30手)200<br/>" },
              { min: 30.01, max: 60, profit: 300, text: "(30.01-60手)300<br/>" },
              { min: 60, max: null, profit: 400, text: "(60手以上)400" },
            ],
            [
              { min: 0, max: 30, profit: 2000, text: "层級保证金<br>(0-30手)2000<br/>" },
              { min: 30.01, max: 60, profit: 3000, text: "(30.01-60手)3000<br/>" },
              { min: 60, max: null, profit: 4000, text: "(60手以上)4000" },
            ],
          ],
        },
      },
      type: "forex",
      isInCheckbox: false,
    },
    {
      name: { ch: "特斯拉", en: "Tesla Inc" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 6000, text: "层級保证金<br>(0-10手)6000美元<br/>" },
              { min: 10.01, max: 30, profit: 12000, text: "(10.01-30手)12000美元<br/>" },
              { min: 30.01, max: 50, profit: 24000, text: "(30.01-50手)24000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1200, text: "层級保证金<br>(0-10手)1200美元<br/>" },
              { min: 10.01, max: 30, profit: 2400, text: "(10.01-30手)2400美元<br/>" },
              { min: 30.01, max: 50, profit: 4800, text: "(30.01-50手)4800美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 6000, text: "层級保证金<br>(0-10手)6000美元<br/>" },
              { min: 10.01, max: 30, profit: 12000, text: "(10.01-30手)12000美元<br/>" },
              { min: 30.01, max: 50, profit: 24000, text: "(30.01-50手)24000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: true,
    },
    {
      name: { ch: "拼多多", en: "Pinduoduo" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 1000, text: "层級保证金<br>(0-10手)1000美元<br/>" },
              { min: 10.01, max: 30, profit: 2000, text: "(10.01-30手)2000美元<br/>" },
              { min: 30.01, max: 50, profit: 4000, text: "(30.01-50手)4000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 200, text: "层級保证金<br>(0-10手)200美元<br/>" },
              { min: 10.01, max: 30, profit: 400, text: "(10.01-30手)400美元<br/>" },
              { min: 30.01, max: 50, profit: 800, text: "(30.01-50手)800美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1000, text: "层級保证金<br>(0-10手)1000美元<br/>" },
              { min: 10.01, max: 30, profit: 2000, text: "(10.01-30手)2000美元<br/>" },
              { min: 30.01, max: 50, profit: 4000, text: "(30.01-50手)4000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "苹果公司", en: "Apple Inc" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 750, text: "层級保证金<br>(0-10手)750美元<br/>" },
              { min: 10.01, max: 30, profit: 1500, text: "(10.01-30手)1500美元<br/>" },
              { min: 30.01, max: 50, profit: 3000, text: "(30.01-50手)3000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 150, text: "层級保证金<br>(0-10手)150美元<br/>" },
              { min: 10.01, max: 30, profit: 300, text: "(10.01-30手)300美元<br/>" },
              { min: 30.01, max: 50, profit: 600, text: "(30.01-50手)600美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 750, text: "层級保证金<br>(0-10手)750美元<br/>" },
              { min: 10.01, max: 30, profit: 1500, text: "(10.01-30手)1500美元<br/>" },
              { min: 30.01, max: 50, profit: 3000, text: "(30.01-50手)3000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: true,
    },
    {
      name: { ch: "阿里巴巴", en: "Alibaba Group" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 1500, text: "层級保证金<br>(0-10手)1500美元<br/>" },
              { min: 10.01, max: 30, profit: 3000, text: "(10.01-30手)3000美元<br/>" },
              { min: 30.01, max: 50, profit: 6000, text: "(30.01-50手)6000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 300, text: "层級保证金<br>(0-10手)300美元<br/>" },
              { min: 10.01, max: 30, profit: 600, text: "(10.01-30手)600美元<br/>" },
              { min: 30.01, max: 50, profit: 1200, text: "(30.01-50手)1200美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1500, text: "层級保证金<br>(0-10手)1500美元<br/>" },
              { min: 10.01, max: 30, profit: 3000, text: "(10.01-30手)3000美元<br/>" },
              { min: 30.01, max: 50, profit: 6000, text: "(30.01-50手)6000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "小米集团", en: "XIAOMI" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 100, text: "层級保证金<br>(0-20手)100港币<br/>" },
              { min: 20.01, max: 60, profit: 200, text: "(20.01-60手)200港币<br/>" },
              { min: 60, max: null, profit: 400, text: "(60手以上)400港币" },
            ],
            [
              { min: 0, max: 20, profit: 20, text: "层級保证金<br>(0-20手)20港币<br/>" },
              { min: 20.01, max: 60, profit: 40, text: "(20.01-60手)40港币<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80港币" },
            ],
            [
              { min: 0, max: 20, profit: 100, text: "层級保证金<br>(0-20手)100港币<br/>" },
              { min: 20.01, max: 60, profit: 200, text: "(20.01-60手)200港币<br/>" },
              { min: 60, max: null, profit: 400, text: "(60手以上)400港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "比亚迪电子", en: "BYD ELECTRONIC" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 300, text: "层級保证金<br>(0-20手)300港币<br/>" },
              { min: 20.01, max: 60, profit: 600, text: "(20.01-60手)600港币<br/>" },
              { min: 60, max: null, profit: 1200, text: "(60手以上)1200港币" },
            ],
            [
              { min: 0, max: 20, profit: 60, text: "层級保证金<br>(0-20手)60港币<br/>" },
              { min: 20.01, max: 60, profit: 120, text: "(20.01-60手)120港币<br/>" },
              { min: 60, max: null, profit: 240, text: "(60手以上)240港币" },
            ],
            [
              { min: 0, max: 20, profit: 300, text: "层級保证金<br>(0-20手)300港币<br/>" },
              { min: 20.01, max: 60, profit: 600, text: "(20.01-60手)600港币<br/>" },
              { min: 60, max: null, profit: 1200, text: "(60手以上)1200港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "爱奇艺", en: "IQ" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 200, text: "层級保证金<br>(0-10手)200美元<br/>" },
              { min: 10.01, max: 30, profit: 400, text: "(10.01-30手)400美元<br/>" },
              { min: 30.01, max: 50, profit: 800, text: "(30.01-50手)800美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 40, text: "层級保证金<br>(0-10手)40美元<br/>" },
              { min: 10.01, max: 30, profit: 80, text: "(10.01-30手)80美元<br/>" },
              { min: 30.01, max: 50, profit: 160, text: "(30.01-50手)160美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 200, text: "层級保证金<br>(0-10手)200美元<br/>" },
              { min: 10.01, max: 30, profit: 400, text: "(10.01-30手)400美元<br/>" },
              { min: 30.01, max: 50, profit: 800, text: "(30.01-50手)800美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "京东", en: "JD.com Inc" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 500, text: "层級保证金<br>(0-10手)500美元<br/>" },
              { min: 10.01, max: 30, profit: 1000, text: "(10.01-30手)1000美元<br/>" },
              { min: 30.01, max: 50, profit: 2000, text: "(30.01-50手)2000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 100, text: "层級保证金<br>(0-10手)100美元<br/>" },
              { min: 10.01, max: 30, profit: 200, text: "(10.01-30手)200美元<br/>" },
              { min: 30.01, max: 50, profit: 400, text: "(30.01-50手)400美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 500, text: "层級保证金<br>(0-10手)500美元<br/>" },
              { min: 10.01, max: 30, profit: 1000, text: "(10.01-30手)1000美元<br/>" },
              { min: 30.01, max: 50, profit: 2000, text: "(30.01-50手)2000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: true,
    },
    {
      name: { ch: "百度", en: "Baidu Inc" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 1250, text: "层級保证金<br>(0-10手)1250美元<br/>" },
              { min: 10.01, max: 30, profit: 2500, text: "(10.01-30手)2500美元<br/>" },
              { min: 30.01, max: 50, profit: 5000, text: "(30.01-50手)5000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 250, text: "层級保证金<br>(0-10手)250美元<br/>" },
              { min: 10.01, max: 30, profit: 500, text: "(10.01-30手)500美元<br/>" },
              { min: 30.01, max: 50, profit: 1000, text: "(30.01-50手)1000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1250, text: "层級保证金<br>(0-10手)1250美元<br/>" },
              { min: 10.01, max: 30, profit: 2500, text: "(10.01-30手)2500美元<br/>" },
              { min: 30.01, max: 50, profit: 5000, text: "(30.01-50手)5000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "腾讯控股", en: "TENCENT" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 3500, text: "层級保证金<br>(0-20手)3500港币<br/>" },
              { min: 20.01, max: 60, profit: 7000, text: "(20.01-60手)7000港币<br/>" },
              { min: 60, max: null, profit: 14000, text: "(60手以上)14000港币" },
            ],
            [
              { min: 0, max: 20, profit: 700, text: "层級保证金<br>(0-20手)700港币<br/>" },
              { min: 20.01, max: 60, profit: 1400, text: "(20.01-60手)1400港币<br/>" },
              { min: 60, max: null, profit: 2800, text: "(60手以上)2800港币" },
            ],
            [
              { min: 0, max: 20, profit: 3500, text: "层級保证金<br>(0-20手)3500港币<br/>" },
              { min: 20.01, max: 60, profit: 7000, text: "(20.01-60手)7000港币<br/>" },
              { min: 60, max: null, profit: 14000, text: "(60手以上)14000港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "亚马逊", en: "Amazon.com Inc" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 15000, text: "层級保证金<br>(0-10手)15000美元<br/>" },
              { min: 10.01, max: 30, profit: 30000, text: "(10.01-30手)30000美元<br/>" },
              { min: 30.01, max: 50, profit: 60000, text: "(30.01-50手)60000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 3000, text: "层級保证金<br>(0-10手)3000美元<br/>" },
              { min: 10.01, max: 30, profit: 6000, text: "(10.01-30手)6000美元<br/>" },
              { min: 30.01, max: 50, profit: 12000, text: "(30.01-50手)12000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 15000, text: "层級保证金<br>(0-10手)15000美元<br/>" },
              { min: 10.01, max: 30, profit: 30000, text: "(10.01-30手)30000美元<br/>" },
              { min: 30.01, max: 50, profit: 60000, text: "(30.01-50手)60000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "星巴克", en: "Starbucks Corporation" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 500, text: "层級保证金<br>(0-10手)500美元<br/>" },
              { min: 10.01, max: 30, profit: 1000, text: "(10.01-30手)1000美元<br/>" },
              { min: 30.01, max: 50, profit: 2000, text: "(30.01-50手)2000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 100, text: "层級保证金<br>(0-10手)100美元<br/>" },
              { min: 10.01, max: 30, profit: 200, text: "(10.01-30手)200美元<br/>" },
              { min: 30.01, max: 50, profit: 400, text: "(30.01-50手)400美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 500, text: "层級保证金<br>(0-10手)500美元<br/>" },
              { min: 10.01, max: 30, profit: 1000, text: "(10.01-30手)1000美元<br/>" },
              { min: 30.01, max: 50, profit: 2000, text: "(30.01-50手)2000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "Facebook", en: "Facebook Inc" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 1250, text: "层級保证金<br>(0-10手)1250美元<br/>" },
              { min: 10.01, max: 30, profit: 2500, text: "(10.01-30手)2500美元<br/>" },
              { min: 30.01, max: 50, profit: 5000, text: "(30.01-50手)5000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 250, text: "层級保证金<br>(0-10手)250美元<br/>" },
              { min: 10.01, max: 30, profit: 500, text: "(10.01-30手)500美元<br/>" },
              { min: 30.01, max: 50, profit: 1000, text: "(30.01-50手)1000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1250, text: "层級保证金<br>(0-10手)1250美元<br/>" },
              { min: 10.01, max: 30, profit: 2500, text: "(10.01-30手)2500美元<br/>" },
              { min: 30.01, max: 50, profit: 5000, text: "(30.01-50手)5000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "高盛", en: "Goldman Sachs Group Inc" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 1500, text: "层級保证金<br>(0-10手)1500美元<br/>" },
              { min: 10.01, max: 30, profit: 3000, text: "(10.01-30手)3000美元<br/>" },
              { min: 30.01, max: 50, profit: 6000, text: "(30.01-50手)6000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 300, text: "层級保证金<br>(0-10手)300美元<br/>" },
              { min: 10.01, max: 30, profit: 600, text: "(10.01-30手)600美元<br/>" },
              { min: 30.01, max: 50, profit: 1200, text: "(30.01-50手)1200美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1500, text: "层級保证金<br>(0-10手)1500美元<br/>" },
              { min: 10.01, max: 30, profit: 3000, text: "(10.01-30手)3000美元<br/>" },
              { min: 30.01, max: 50, profit: 6000, text: "(30.01-50手)6000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "可口可乐", en: "Coca-Cola Company" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 300, text: "层級保证金<br>(0-10手)300美元<br/>" },
              { min: 10.01, max: 30, profit: 600, text: "(10.01-30手)600美元<br/>" },
              { min: 30.01, max: 50, profit: 1200, text: "(30.01-50手)1200美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 60, text: "层級保证金<br>(0-10手)60美元<br/>" },
              { min: 10.01, max: 30, profit: 120, text: "(10.01-30手)120美元<br/>" },
              { min: 30.01, max: 50, profit: 240, text: "(30.01-50手)240美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 300, text: "层級保证金<br>(0-10手)300美元<br/>" },
              { min: 10.01, max: 30, profit: 600, text: "(10.01-30手)600美元<br/>" },
              { min: 30.01, max: 50, profit: 1200, text: "(30.01-50手)1200美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "网易", en: "NetEase Inc" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 750, text: "层級保证金<br>(0-10手)750美元<br/>" },
              { min: 10.01, max: 30, profit: 1500, text: "(10.01-30手)1500美元<br/>" },
              { min: 30.01, max: 50, profit: 3000, text: "(30.01-50手)3000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 150, text: "层級保证金<br>(0-10手)150美元<br/>" },
              { min: 10.01, max: 30, profit: 300, text: "(10.01-30手)300美元<br/>" },
              { min: 30.01, max: 50, profit: 600, text: "(30.01-50手)600美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 750, text: "层級保证金<br>(0-10手)750美元<br/>" },
              { min: 10.01, max: 30, profit: 1500, text: "(10.01-30手)1500美元<br/>" },
              { min: 30.01, max: 50, profit: 3000, text: "(30.01-50手)3000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "微软", en: "Microsoft Corporation" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 1250, text: "层級保证金<br>(0-10手)1250美元<br/>" },
              { min: 10.01, max: 30, profit: 2500, text: "(10.01-30手)2500美元<br/>" },
              { min: 30.01, max: 50, profit: 5000, text: "(30.01-50手)5000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 250, text: "层級保证金<br>(0-10手)250美元<br/>" },
              { min: 10.01, max: 30, profit: 500, text: "(10.01-30手)500美元<br/>" },
              { min: 30.01, max: 50, profit: 1000, text: "(30.01-50手)1000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 1250, text: "层級保证金<br>(0-10手)1250美元<br/>" },
              { min: 10.01, max: 30, profit: 2500, text: "(10.01-30手)2500美元<br/>" },
              { min: 30.01, max: 50, profit: 5000, text: "(30.01-50手)5000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: true,
    },
    {
      name: { ch: "迪士尼", en: "Walt Disney Company" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 750, text: "层級保证金<br>(0-10手)750美元<br/>" },
              { min: 10.01, max: 30, profit: 1500, text: "(10.01-30手)1500美元<br/>" },
              { min: 30.01, max: 50, profit: 3000, text: "(30.01-50手)3000美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 150, text: "层級保证金<br>(0-10手)150美元<br/>" },
              { min: 10.01, max: 30, profit: 300, text: "(10.01-30手)300美元<br/>" },
              { min: 30.01, max: 50, profit: 600, text: "(30.01-50手)600美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 750, text: "层級保证金<br>(0-10手)750美元<br/>" },
              { min: 10.01, max: 30, profit: 1500, text: "(10.01-30手)1500美元<br/>" },
              { min: 30.01, max: 50, profit: 3000, text: "(30.01-50手)3000美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "携程", en: "Ctrip.com International" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "USD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "夏令：周一至周五每天21:30-翌日04:00<br>冬令：周一至周五每天22:30-翌日05:00",
          deposit: [
            [
              { min: 0, max: 10, profit: 200, text: "层級保证金<br>(0-10手)200美元<br/>" },
              { min: 10.01, max: 30, profit: 400, text: "(10.01-30手)400美元<br/>" },
              { min: 30.01, max: 50, profit: 800, text: "(30.01-50手)800美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 40, text: "层級保证金<br>(0-10手)40美元<br/>" },
              { min: 10.01, max: 30, profit: 80, text: "(10.01-30手)80美元<br/>" },
              { min: 30.01, max: 50, profit: 160, text: "(30.01-50手)160美元<br/>" },
            ],
            [
              { min: 0, max: 10, profit: 200, text: "层級保证金<br>(0-10手)200美元<br/>" },
              { min: 10.01, max: 30, profit: 400, text: "(10.01-30手)400美元<br/>" },
              { min: 30.01, max: 50, profit: 800, text: "(30.01-50手)800美元<br/>" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "汇丰控股", en: "HSBC Holdings" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 250, text: "层級保证金<br>(0-20手)250港币<br/>" },
              { min: 20.01, max: 60, profit: 500, text: "(20.01-60手)500港币<br/>" },
              { min: 60, max: null, profit: 1000, text: "(60手以上)1000港币" },
            ],
            [
              { min: 0, max: 20, profit: 50, text: "层級保证金<br>(0-20手)50港币<br/>" },
              { min: 20.01, max: 60, profit: 100, text: "(20.01-60手)100港币<br/>" },
              { min: 60, max: null, profit: 200, text: "(60手以上)200港币" },
            ],
            [
              { min: 0, max: 20, profit: 250, text: "层級保证金<br>(0-20手)250港币<br/>" },
              { min: 20.01, max: 60, profit: 500, text: "(20.01-60手)500港币<br/>" },
              { min: 60, max: null, profit: 1000, text: "(60手以上)1000港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "香港交易所", en: "HKEX" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 2500, text: "层級保证金<br>(0-20手)2500港币<br/>" },
              { min: 20.01, max: 60, profit: 5000, text: "(20.01-60手)5000港币<br/>" },
              { min: 60, max: null, profit: 10000, text: "(60手以上)10000港币" },
            ],
            [
              { min: 0, max: 20, profit: 500, text: "层級保证金<br>(0-20手)500港币<br/>" },
              { min: 20.01, max: 60, profit: 1000, text: "(20.01-60手)1000港币<br/>" },
              { min: 60, max: null, profit: 2000, text: "(60手以上)2000港币" },
            ],
            [
              { min: 0, max: 20, profit: 2500, text: "层級保证金<br>(0-20手)2500港币<br/>" },
              { min: 20.01, max: 60, profit: 5000, text: "(20.01-60手)5000港币<br/>" },
              { min: 60, max: null, profit: 10000, text: "(60手以上)10000港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "中国平安", en: "PING AN" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 500, text: "层級保证金<br>(0-20手)500港币<br/>" },
              { min: 20.01, max: 60, profit: 1000, text: "(20.01-60手)1000港币<br/>" },
              { min: 60, max: null, profit: 2000, text: "(60手以上)2000港币" },
            ],
            [
              { min: 0, max: 20, profit: 100, text: "层級保证金<br>(0-20手)100港币<br/>" },
              { min: 20.01, max: 60, profit: 200, text: "(20.01-60手)200港币<br/>" },
              { min: 60, max: null, profit: 400, text: "(60手以上)400港币" },
            ],
            [
              { min: 0, max: 20, profit: 500, text: "层級保证金<br>(0-20手)500港币<br/>" },
              { min: 20.01, max: 60, profit: 1000, text: "(20.01-60手)1000港币<br/>" },
              { min: 60, max: null, profit: 2000, text: "(60手以上)2000港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "恒生银行", en: "HANG SENG BANK" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 750, text: "层級保证金<br>(0-20手)750港币<br/>" },
              { min: 20.01, max: 60, profit: 1500, text: "(20.01-60手)1500港币<br/>" },
              { min: 60, max: null, profit: 3000, text: "(60手以上)3000港币" },
            ],
            [
              { min: 0, max: 20, profit: 150, text: "层級保证金<br>(0-20手)150港币<br/>" },
              { min: 20.01, max: 60, profit: 300, text: "(20.01-60手)300港币<br/>" },
              { min: 60, max: null, profit: 600, text: "(60手以上)600港币" },
            ],
            [
              { min: 0, max: 20, profit: 750, text: "层級保证金<br>(0-20手)750港币<br/>" },
              { min: 20.01, max: 60, profit: 1500, text: "(20.01-60手)1500港币<br/>" },
              { min: 60, max: null, profit: 3000, text: "(60手以上)3000港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "招商局港口", en: "CHINA MER PORT" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 50, text: "层級保证金<br>(0-20手)50港币<br/>" },
              { min: 20.01, max: 60, profit: 100, text: "(20.01-60手)100港币<br/>" },
              { min: 60, max: null, profit: 200, text: "(60手以上)200港币" },
            ],
            [
              { min: 0, max: 20, profit: 10, text: "层級保证金<br>(0-20手)10港币<br/>" },
              { min: 20.01, max: 60, profit: 20, text: "(20.01-60手)20港币<br/>" },
              { min: 60, max: null, profit: 40, text: "(60手以上)40港币" },
            ],
            [
              { min: 0, max: 20, profit: 50, text: "层級保证金<br>(0-20手)50港币<br/>" },
              { min: 20.01, max: 60, profit: 100, text: "(20.01-60手)100港币<br/>" },
              { min: 60, max: null, profit: 200, text: "(60手以上)200港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "中国中铁", en: "CHINA RAILWAY" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 20, text: "层級保证金<br>(0-20手)20港币<br/>" },
              { min: 20.01, max: 60, profit: 40, text: "(20.01-60手)40港币<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80港币" },
            ],
            [
              { min: 0, max: 20, profit: 4, text: "层級保证金<br>(0-20手)4港币<br/>" },
              { min: 20.01, max: 60, profit: 8, text: "(20.01-60手)8港币<br/>" },
              { min: 60, max: null, profit: 16, text: "(60手以上)16港币" },
            ],
            [
              { min: 0, max: 20, profit: 20, text: "层級保证金<br>(0-20手)20港币<br/>" },
              { min: 20.01, max: 60, profit: 40, text: "(20.01-60手)40港币<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: true,
    },
    {
      name: { ch: "联想集团", en: "LENOVO GROUP" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 50, text: "层級保证金<br>(0-20手)50港币<br/>" },
              { min: 20.01, max: 60, profit: 100, text: "(20.01-60手)100港币<br/>" },
              { min: 60, max: null, profit: 200, text: "(60手以上)200港币" },
            ],
            [
              { min: 0, max: 20, profit: 10, text: "层級保证金<br>(0-20手)10港币<br/>" },
              { min: 20.01, max: 60, profit: 20, text: "(20.01-60手)20港币<br/>" },
              { min: 60, max: null, profit: 40, text: "(60手以上)40港币" },
            ],
            [
              { min: 0, max: 20, profit: 50, text: "层級保证金<br>(0-20手)50港币<br/>" },
              { min: 20.01, max: 60, profit: 100, text: "(20.01-60手)100港币<br/>" },
              { min: 60, max: null, profit: 200, text: "(60手以上)200港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "中银香港", en: "BOC HONG KONG" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 150, text: "层級保证金<br>(0-20手)150港币<br/>" },
              { min: 20.01, max: 60, profit: 300, text: "(20.01-60手)300港币<br/>" },
              { min: 60, max: null, profit: 600, text: "(60手以上)600港币" },
            ],
            [
              { min: 0, max: 20, profit: 30, text: "层級保证金<br>(0-20手)30港币<br/>" },
              { min: 20.01, max: 60, profit: 60, text: "(20.01-60手)60港币<br/>" },
              { min: 60, max: null, profit: 120, text: "(60手以上)120港币" },
            ],
            [
              { min: 0, max: 20, profit: 150, text: "层級保证金<br>(0-20手)150港币<br/>" },
              { min: 20.01, max: 60, profit: 300, text: "(20.01-60手)300港币<br/>" },
              { min: 60, max: null, profit: 600, text: "(60手以上)600港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "中国联通", en: "CHINA UNICOM" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 20, text: "层級保证金<br>(0-20手)20港币<br/>" },
              { min: 20.01, max: 60, profit: 40, text: "(20.01-60手)40港币<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80港币" },
            ],
            [
              { min: 0, max: 20, profit: 4, text: "层級保证金<br>(0-20手)4港币<br/>" },
              { min: 20.01, max: 60, profit: 8, text: "(20.01-60手)8港币<br/>" },
              { min: 60, max: null, profit: 16, text: "(60手以上)16港币" },
            ],
            [
              { min: 0, max: 20, profit: 20, text: "层級保证金<br>(0-20手)20港币<br/>" },
              { min: 20.01, max: 60, profit: 40, text: "(20.01-60手)40港币<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "友邦保险", en: "AIA" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 500, text: "层級保证金<br>(0-20手)500港币<br/>" },
              { min: 20.01, max: 60, profit: 1000, text: "(20.01-60手)1000港币<br/>" },
              { min: 60, max: null, profit: 2000, text: "(60手以上)2000港币" },
            ],
            [
              { min: 0, max: 20, profit: 100, text: "层級保证金<br>(0-20手)100港币<br/>" },
              { min: 20.01, max: 60, profit: 200, text: "(20.01-60手)200港币<br/>" },
              { min: 60, max: null, profit: 400, text: "(60手以上)400港币" },
            ],
            [
              { min: 0, max: 20, profit: 500, text: "层級保证金<br>(0-20手)500港币<br/>" },
              { min: 20.01, max: 60, profit: 1000, text: "(20.01-60手)1000港币<br/>" },
              { min: 60, max: null, profit: 2000, text: "(60手以上)2000港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "中国光大控股", en: "CHINA EB LTD" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 100, text: "层級保证金<br>(0-20手)100港币<br/>" },
              { min: 20.01, max: 60, profit: 200, text: "(20.01-60手)200港币<br/>" },
              { min: 60, max: null, profit: 400, text: "(60手以上)400港币" },
            ],
            [
              { min: 0, max: 20, profit: 20, text: "层級保证金<br>(0-20手)20港币<br/>" },
              { min: 20.01, max: 60, profit: 40, text: "(20.01-60手)40港币<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80港币" },
            ],
            [
              { min: 0, max: 20, profit: 100, text: "层級保证金<br>(0-20手)100港币<br/>" },
              { min: 20.01, max: 60, profit: 200, text: "(20.01-60手)200港币<br/>" },
              { min: 60, max: null, profit: 400, text: "(60手以上)400港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "中国移动", en: "CHINA MOBILE" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 350, text: "层級保证金<br>(0-20手)350港币<br/>" },
              { min: 20.01, max: 60, profit: 700, text: "(20.01-60手)700港币<br/>" },
              { min: 60, max: null, profit: 1400, text: "(60手以上)1400港币" },
            ],
            [
              { min: 0, max: 20, profit: 70, text: "层級保证金<br>(0-20手)70港币<br/>" },
              { min: 20.01, max: 60, profit: 140, text: "(20.01-60手)140港币<br/>" },
              { min: 60, max: null, profit: 280, text: "(60手以上)280港币" },
            ],
            [
              { min: 0, max: 20, profit: 350, text: "层級保证金<br>(0-20手)350港币<br/>" },
              { min: 20.01, max: 60, profit: 700, text: "(20.01-60手)700港币<br/>" },
              { min: 60, max: null, profit: 1400, text: "(60手以上)1400港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "中国电信", en: "CHINA TELECOM" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 20, text: "层級保证金<br>(0-20手)20港币<br/>" },
              { min: 20.01, max: 60, profit: 40, text: "(20.01-60手)40港币<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80港币" },
            ],
            [
              { min: 0, max: 20, profit: 4, text: "层級保证金<br>(0-20手)4港币<br/>" },
              { min: 20.01, max: 60, profit: 8, text: "(20.01-60手)8港币<br/>" },
              { min: 60, max: null, profit: 16, text: "(60手以上)16港币" },
            ],
            [
              { min: 0, max: 20, profit: 20, text: "层級保证金<br>(0-20手)20港币<br/>" },
              { min: 20.01, max: 60, profit: 40, text: "(20.01-60手)40港币<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "周大福", en: "CHOW TAI FOOK" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 50, text: "层級保证金<br>(0-20手)50港币<br/>" },
              { min: 20.01, max: 60, profit: 100, text: "(20.01-60手)100港币<br/>" },
              { min: 60, max: null, profit: 200, text: "(60手以上)200港币" },
            ],
            [
              { min: 0, max: 20, profit: 10, text: "层級保证金<br>(0-20手)10港币<br/>" },
              { min: 20.01, max: 60, profit: 20, text: "(20.01-60手)20港币<br/>" },
              { min: 60, max: null, profit: 40, text: "(60手以上)40港币" },
            ],
            [
              { min: 0, max: 20, profit: 50, text: "层級保证金<br>(0-20手)50港币<br/>" },
              { min: 20.01, max: 60, profit: 100, text: "(20.01-60手)100港币<br/>" },
              { min: 60, max: null, profit: 200, text: "(60手以上)200港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "中信股份", en: "CITIC" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 50, text: "层級保证金<br>(0-20手)50港币<br/>" },
              { min: 20.01, max: 60, profit: 100, text: "(20.01-60手)100港币<br/>" },
              { min: 60, max: null, profit: 200, text: "(60手以上)200港币" },
            ],
            [
              { min: 0, max: 20, profit: 10, text: "层級保证金<br>(0-20手)10港币<br/>" },
              { min: 20.01, max: 60, profit: 20, text: "(20.01-60手)20港币<br/>" },
              { min: 60, max: null, profit: 40, text: "(60手以上)40港币" },
            ],
            [
              { min: 0, max: 20, profit: 50, text: "层級保证金<br>(0-20手)50港币<br/>" },
              { min: 20.01, max: 60, profit: 100, text: "(20.01-60手)100港币<br/>" },
              { min: 60, max: null, profit: 200, text: "(60手以上)200港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "招商银行", en: "CM BANK" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 300, text: "层級保证金<br>(0-20手)300港币<br/>" },
              { min: 20.01, max: 60, profit: 600, text: "(20.01-60手)600港币<br/>" },
              { min: 60, max: null, profit: 1200, text: "(60手以上)1200港币" },
            ],
            [
              { min: 0, max: 20, profit: 60, text: "层級保证金<br>(0-20手)60港币<br/>" },
              { min: 20.01, max: 60, profit: 120, text: "(20.01-60手)120港币<br/>" },
              { min: 60, max: null, profit: 240, text: "(60手以上)240港币" },
            ],
            [
              { min: 0, max: 20, profit: 300, text: "层級保证金<br>(0-20手)300港币<br/>" },
              { min: 20.01, max: 60, profit: 600, text: "(20.01-60手)600港币<br/>" },
              { min: 60, max: null, profit: 1200, text: "(60手以上)1200港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "中国恒大", en: "EVERGRANDE" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 200, text: "层級保证金<br>(0-20手)200港币<br/>" },
              { min: 20.01, max: 60, profit: 400, text: "(20.01-60手)400港币<br/>" },
              { min: 60, max: null, profit: 800, text: "(60手以上)800港币" },
            ],
            [
              { min: 0, max: 20, profit: 40, text: "层級保证金<br>(0-20手)40港币<br/>" },
              { min: 20.01, max: 60, profit: 80, text: "(20.01-60手)80港币<br/>" },
              { min: 60, max: null, profit: 160, text: "(60手以上)160港币" },
            ],
            [
              { min: 0, max: 20, profit: 200, text: "层級保证金<br>(0-20手)200港币<br/>" },
              { min: 20.01, max: 60, profit: 400, text: "(20.01-60手)400港币<br/>" },
              { min: 60, max: null, profit: 800, text: "(60手以上)800港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: true,
    },
    {
      name: { ch: "佳兆业集团", en: "KAISA GROUP" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 20, text: "层級保证金<br>(0-20手)20港币<br/>" },
              { min: 20.01, max: 60, profit: 40, text: "(20.01-60手)40港币<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80港币" },
            ],
            [
              { min: 0, max: 20, profit: 4, text: "层級保证金<br>(0-20手)4港币<br/>" },
              { min: 20.01, max: 60, profit: 8, text: "(20.01-60手)8港币<br/>" },
              { min: 60, max: null, profit: 16, text: "(60手以上)16港币" },
            ],
            [
              { min: 0, max: 20, profit: 20, text: "层級保证金<br>(0-20手)20港币<br/>" },
              { min: 20.01, max: 60, profit: 40, text: "(20.01-60手)40港币<br/>" },
              { min: 60, max: null, profit: 80, text: "(60手以上)80港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    {
      name: { ch: "中兴通讯", en: "ZTE" },
      market: {},
      detail: {
        isSelected: false,
        content: {
          minTrade: "0.01手",
          currency: "HKD",
          spec: "100",
          singleTrade: "0.01手~10手",
          tradeTime: "周一至周五每天9:30-16:00",
          deposit: [
            [
              { min: 0, max: 20, profit: 200, text: "层級保证金<br>(0-20手)200港币<br/>" },
              { min: 20.01, max: 60, profit: 400, text: "(20.01-60手)400港币<br/>" },
              { min: 60, max: null, profit: 800, text: "(60手以上)800港币" },
            ],
            [
              { min: 0, max: 20, profit: 40, text: "层級保证金<br>(0-20手)40港币<br/>" },
              { min: 20.01, max: 60, profit: 80, text: "(20.01-60手)80港币<br/>" },
              { min: 60, max: null, profit: 160, text: "(60手以上)160港币" },
            ],
            [
              { min: 0, max: 20, profit: 200, text: "层級保证金<br>(0-20手)200港币<br/>" },
              { min: 20.01, max: 60, profit: 400, text: "(20.01-60手)400港币<br/>" },
              { min: 60, max: null, profit: 800, text: "(60手以上)800港币" },
            ],
          ],
        },
      },
      type: "stocks",
      isInCheckbox: false,
    },
    { name: { ch: "伦敦金", en: "LLG" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "伦敦银", en: "LLS" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "离岸人民币黄金", en: "XAUCNH" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "离岸人民币白银", en: "XAGCNH" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "柚子币兑泰达币", en: "EOSUSDT" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "瑞波币兑泰达币", en: "XRPUSDT" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "以太币兑比特币", en: "ETHBTC" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "埃欧塔兑泰达币", en: "IOTAUSDT" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "寿司币兑泰达币", en: "SUSHIUSDT" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "比特币兑泰达币", en: "BTCUSDT" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "以太币兑泰达币", en: "ETHUSDT" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "比特币现金兑泰达币", en: "BCHUSDT" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "莱特币兑泰达币", en: "LTCUSDT" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "美元港币", en: "USDHKD" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
    { name: { ch: "纽约期油", en: "CLWTI" }, market: {}, detail: { isSelected: false, content: { minTrade: "0.01手", currency: "USD" } } },
  ],
};

const Excel = require("exceljs");

// Create workbook & add worksheet
const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet("ExampleSheet")
console.log(data.productTable[0])
// add column headers
worksheet.columns = [
  { header: "Package", key: "package_name" },
  { header: "Author", key: "author_name" },
];

// Add row using key mapping to columns
worksheet.addRow({ package_name: "ABC", author_name: "Author 1" }, { package_name: "XYZ", author_name: "Author 2" });

// Add rows as Array values
worksheet.addRow(["BCD", "Author Name 3"]);

// Add rows using both the above of rows
const rows = [["FGH", "Author Name 4"], { package_name: "PQR", author_name: "Author 5" }];

worksheet.addRows(rows);

// save workbook to disk
workbook.xlsx
  .writeFile("sample.xlsx")
  .then(() => {
    console.log("saved");
  })
  .catch((err) => {
    console.log("err", err);
  });
