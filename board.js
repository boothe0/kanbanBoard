"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableOne = void 0;
var firstCard = document.getElementById("name");
var tableHeaders = /** @class */ (function () {
    function tableHeaders() {
        this.name = "";
    }
    return tableHeaders;
}());
exports.tableOne = new tableHeaders();
exports.tableOne.status = firstCard.children[0].innerHTML;
console.log(exports.tableOne.status);
console.log(exports.tableOne.status);
