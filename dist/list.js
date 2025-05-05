import { tableOne } from "./board.js"; // <-- IMPORTANT: use the `.js` extension
console.log(tableOne.status);
window.fillInStatus = function (param) {
    param.innerHTML = tableOne.status;
};
