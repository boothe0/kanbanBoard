const firstCard = document.getElementById("name");
class tableHeaders {
  name: string = "";
  status: string = "";
  description: string = "";
  assignee: string = "";
  due_date: Date = new Date();
}
export const tableOne = new tableHeaders();

const savedData = localStorage.getItem("tableOne");
if (savedData) {
  Object.assign(tableOne, JSON.parse(savedData));
}

if (firstCard) {
  tableOne.status = firstCard.children[0].innerHTML;
  tableOne.name = firstCard.children[1].innerHTML;
  tableOne.description = firstCard.children[2].innerHTML;
  console.log(tableOne.status);
  console.log(tableOne.name);
  console.log(tableOne.description);
  localStorage.setItem("tableOne", JSON.stringify(tableOne));
}
