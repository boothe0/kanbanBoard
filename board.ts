const firstCard = document.getElementById("name");
class tableHeaders {
  name: string = "";
  status: string;
  description: string;
  assignee: string;
  due_date: Date;
}
export const tableOne = new tableHeaders();
tableOne.status = firstCard.children[0].innerHTML;
console.log(tableOne.status);

console.log(tableOne.status);
