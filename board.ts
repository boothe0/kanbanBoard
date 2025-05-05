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
  makeTheCard(tableOne.status, tableOne.name, tableOne.description);
}
// uncomment to remove the table to reset for testing
// localStorage.removeItem("tableOne");

function makeTheCard(status: string, title: string, description: string) {
  const card = document.getElementById("boardCards");
  const cardDivder = document.createElement("div");
  cardDivder.classList.add("card-divider");
  cardDivder.classList.add("align-center");
  // set the inner html as the passed in param from the submit button
  cardDivder.innerHTML = status;

  const cardSectionName = document.createElement("div");
  cardSectionName.classList.add("card-section");
  // set the inner html as the passed in param from the submit button
  cardSectionName.innerHTML = title;

  const cardSectionDescription = document.createElement("div");
  cardSectionDescription.classList.add("card-section");
  // set the inner html as the passed in param from the submit button
  cardSectionDescription.innerHTML = description;

  // appending all children to the card
  card?.appendChild(cardDivder);
  card?.appendChild(cardSectionName);
  card?.appendChild(cardSectionDescription);
  console.log("Clicked!");
  localStorage.setItem("tableOne", JSON.stringify(tableOne));
}

(window as any).fillInBoard = function fillInBoard() {
  const status = document.getElementById("status") as HTMLInputElement;
  const statusValue = status.value;
  const title = document.getElementById("title") as HTMLInputElement;
  const titleValue = title.value;
  const description = document.getElementById(
    "description"
  ) as HTMLInputElement;
  const descriptionValue = description.value;
  const assignee = document.getElementById("assignee") as HTMLInputElement;
  const assigneeValue = assignee.value;
  const dueDate = document.getElementById("dueDate") as HTMLInputElement;
  const dueDateValue = new Date(dueDate.value);
  tableOne.status = statusValue;
  tableOne.name = titleValue;
  // for loading purposes
  tableOne.description = descriptionValue;
  tableOne.assignee = assigneeValue;
  tableOne.due_date = dueDateValue;
  makeTheCard(statusValue, titleValue, descriptionValue);
  closeModal();
};

function closeModal() {
  const modal = document.getElementById("modal1");
  if (modal) {
    // @ts-ignore
    $(modal).foundation("close");
  }
}
