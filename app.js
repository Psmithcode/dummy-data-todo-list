    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = []
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        for(i = 0; i < arrayOfTodos.length; i++) {
            let toDoList = document.getElementById("todo-list")
            let li = document.createElement("li")
            let toDo = document.createTextNode(arrayOfTodos[i].title)
            li.appendChild(toDo)
            toDoList.appendChild(li)
        }
    }