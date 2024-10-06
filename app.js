let todoListDatabase = [];

let ul = document.getElementById("myUL");
let input = document.getElementById("myInput");
let addBtn = document.getElementById("addBtn");
let liList = document.getElementsByTagName("li");

function render() {
  ul.innerHTML = "";
  for (let todo of todoListDatabase) {
    li = `
            <li id="${todo.id}">
                ${todo.content}
            </li>
        `;
    ul.innerHTML += li;
  }
}

render();

addBtn.onclick = function () {
  if (input.value) {
    let newTodo = {
      id: todoListDatabase.length + 1,
      content: input.value,
      status: false,
    };
    todoListDatabase.push(newTodo);
    render();
    input.value = "";
  }
};
