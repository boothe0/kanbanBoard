"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = require("./board");
console.log(board_1.tableOne.status);
function fillInStatus(param) {
    param.innerHTML = board_1.tableOne.status;
}
