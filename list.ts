import { tableOne } from "./board.js"; // <-- IMPORTANT: use the `.js` extension

console.log(tableOne.status);

function fillInStatus() {
  const table = document.getElementById("table");
  const tableRow = document.createElement("tr");
  const tableList1 = document.createElement("td");
  const tableList2 = document.createElement("td");
  const tableList3 = document.createElement("td");
  const tableList4 = document.createElement("td");
  table?.appendChild(tableRow);
  tableRow?.appendChild(tableList1);
  tableRow?.appendChild(tableList2);
  tableRow?.appendChild(tableList3);
  tableRow?.appendChild(tableList4);

  if (tableOne) {
    tableList1.innerHTML = tableOne.name;
    tableList2.innerHTML = tableOne.status;
    tableList3.innerHTML = tableOne.description;
  }
}

fillInStatus();
