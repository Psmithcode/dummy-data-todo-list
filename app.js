// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [];
let filteredArrayOfTodos = [];
const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
  for (i = 0; i < arrayOfTodos.length; i++) {
    let toDoList = document.getElementById("todo-list");

    let li = document.createElement("li");

    let toDo = document.createTextNode(arrayOfTodos[i].title);

    li.appendChild(toDo);
    toDoList.appendChild(li);
  }
};

const filterTodos = () => {
  resetTodos();
  let input = document.getElementById("numberInput").value;
  console.log("input:", input);
  filteredArrayOfTodos = arrayOfTodos.filter((todo) => todo.userId == input);
  arrayOfTodos = filteredArrayOfTodos;
  logTodos();
  populateTodos();
};

// const completeTodos = () => {
//   resetTodos();
//   let completeFilter = filteredArrayOfTodos.filter(
//     (todo) => todo.completed === true
//   );
//   arrayOfTodos = completeFilter;
//   populateTodos();
// };

const resetTodos = () => {
  const toDoList = document.getElementsByTagName("ol");

  for (i = 0; i < toDoList.length; i++) {
    toDoList[i].innerHTML = null;
  }
};
