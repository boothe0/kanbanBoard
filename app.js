var firstCard = document.getElementById("name");
var tableOne;
var tableHeaders = /** @class */ (function () {
    function tableHeaders() {
        this.name = "";
    }
    return tableHeaders;
}());
if (firstCard) {
    tableOne = new tableHeaders();
    tableOne.status = firstCard.children[0].innerHTML;
    console.log(tableOne.status);
}
function fillInStatus(param) {
    param.innerHTML = tableOne.status;
}
