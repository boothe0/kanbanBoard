import { tableOne } from "./board";
console.log(tableOne.status);

function fillInStatus(param: HTMLElement) {
  param.innerHTML = tableOne.status;
}
