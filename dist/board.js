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
if (firstCard) {
    tableOne.status = firstCard.children[0].innerHTML;
    console.log(tableOne.status);
    localStorage.setItem("tableOne", JSON.stringify(tableOne));
}
