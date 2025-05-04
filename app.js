var boardHeader = document.getElementById("name");
var tableHeaders = /** @class */ (function () {
    function tableHeaders() {
        this.name = "";
    }
    return tableHeaders;
}());
if (boardHeader) {
    var tableOne = new tableHeaders();
    tableOne.name = boardHeader.innerHTML;
    console.log(tableOne);
}
