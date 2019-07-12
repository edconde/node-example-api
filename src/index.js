"use strict";
exports.__esModule = true;
var app_1 = require("./server/app");
var db_1 = require("./server/db");
var port = 3000;
var app = new app_1["default"](port);
app.listen();
db_1.TestDB.connect();
