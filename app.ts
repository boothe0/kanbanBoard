const boardHeader = document.getElementById("name");

class tableHeaders {
  name: string = "";
  status: string;
  description: string;
  assignee: string;
  due_date: Date;
}

if (boardHeader) {
  let tableOne = new tableHeaders();
  tableOne.name = boardHeader.innerHTML;
  console.log(tableOne);
}
