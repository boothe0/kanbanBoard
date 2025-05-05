const firstCard = document.getElementById("name");
class tableHeaders {
    constructor() {
        this.name = "";
        this.status = "";
        this.description = "";
        this.assignee = "";
        this.due_date = new Date();
    }
}
export const tableOne = new tableHeaders();
const savedData = localStorage.getItem("tableOne");
if (savedData) {
    Object.assign(tableOne, JSON.parse(savedData));
}
//localStorage.removeItem("tableOne");
function makeTheCard(status, title, description, assignee, due_date) {
    const card = document.getElementById("boardCards");
    const cardDivder = document.createElement("div");
    cardDivder.classList.add("card-divider");
    cardDivder.classList.add("align-center");
    // set the inner html as the passed in param from the submit button
    cardDivder.innerHTML = status;
    // for loading purposes
    tableOne.status = status;
    const cardSectionName = document.createElement("div");
    cardSectionName.classList.add("card-section");
    // set the inner html as the passed in param from the submit button
    cardSectionName.innerHTML = title;
    // for loading purposes
    tableOne.name = title;
    const cardSectionDescription = document.createElement("div");
    cardSectionDescription.classList.add("card-section");
    // set the inner html as the passed in param from the submit button
    cardSectionDescription.innerHTML = description;
    // for loading purposes
    tableOne.description = description;
    tableOne.assignee = assignee;
    tableOne.due_date = due_date;
    // appending all children to the card
    card === null || card === void 0 ? void 0 : card.appendChild(cardDivder);
    card === null || card === void 0 ? void 0 : card.appendChild(cardSectionName);
    card === null || card === void 0 ? void 0 : card.appendChild(cardSectionDescription);
    console.log("Clicked!");
    localStorage.setItem("tableOne", JSON.stringify(tableOne));
}
window.fillInBoard = function fillInBoard() {
    const status = document.getElementById("status");
    const statusValue = status.value;
    const title = document.getElementById("title");
    const titleValue = title.value;
    const description = document.getElementById("description");
    const descriptionValue = description.value;
    const assignee = document.getElementById("assignee");
    const assigneeValue = assignee.value;
    const dueDate = document.getElementById("dueDate");
    const dueDateValue = new Date(dueDate.value);
    makeTheCard(statusValue, titleValue, descriptionValue, assigneeValue, dueDateValue);
    closeModal();
};
function closeModal() {
    const modal = document.getElementById("modal1");
    if (modal) {
        // @ts-ignore
        $(modal).foundation("close");
    }
}
