"use strict";
exports.__esModule = true;
var app_1 = require("./server/app");
var port = 3000;
var app = new app_1["default"](port);
app.listen();
