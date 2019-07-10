"use strict";
exports.__esModule = true;
var app_1 = require("./server/app");
var test_database_1 = require("./server/db/test.database");
var port = 3000;
var app = new app_1["default"](port);
var db = test_database_1["default"].getInstance();
app.listen();
db.connect();
