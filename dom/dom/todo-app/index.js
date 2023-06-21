//variables

const form = getElement('addForm')
const todoList = getElement('todos')
const filter = getElement('filter')
const todo = getElement('todo')

console.log('filter', {filter,form, todo})




//eventListners

//form submit

form.addEventListener('submit', addTodo)

//click event on delete
todoList.addEventListener('click', removeTodo)

//keyup event on search
filter.addEventListener('keyup', filterTodos)

//functions

function getElement(id) {
    return document.getElementById(id)
}

function addTodo(e) {
    e.preventDefault()

    if (todo.value == '') {
        alert('put a valid todo')
        return
    }

    //get the user input 
    const newTodo = todo.value

    //create a new li element

    let li = document.createElement('li')

    //add the classes to li
    li.className = 'todo-item'

    //add newtodo to the li

    li.innerText = newTodo

    //create delete button element

    let deleteButton = document.createElement('button')

    deleteButton.className = "delete-button delete"

    deleteButton.innerText = 'delete'

    li.append(deleteButton)
    todoList.append(li)

    todo.value = ''

}
function removeTodo(e) {
    if (e.target.classList.contains('delete')) {
        let result = confirm('Are you sure?')
        if (result) {
            let li = e.target.parentElement
            todoList.removeChild(li)

        }

    }
}
function filterTodos(e) {

    //convert to lowercase
    console.log('running')

    let searchText = e.target.value.toLowerCase()
    console.log('searchText',searchText)

    //get the list items
    let liItems = document.getElementsByTagName('li')

    //convert it into array

    Array.from(liItems).forEach(item => {
        let todoName = item.firstChild.textContent

        console.log(todoName.toLowerCase().indexOf(searchText))
        if (todoName.toLowerCase().indexOf(searchText) != -1) {
            item.style.display = 'flex'

        } else {

            item.style.display = 'none'
        }
    })




}

// function addTodo(event) {
//     event.preventDefault()
//     if (!todo.value.trim()) {
//       alert('Please enter a valid todo');
//       return;
//     }
  
//     const newTodo = todo.value;
  
//     const li = document.createElement('li');
//     li.classList.add('todo-item');
//     li.textContent = newTodo;
  
//     const deleteButton = document.createElement('button');
//     deleteButton.classList.add('delete-button', 'delete');
//     deleteButton.textContent = 'delete';
  
//     deleteButton.addEventListener('click', () => {
//       const result = confirm('Are you sure?');
//       if (result) {
//         li.remove();
//       }
//     });
  
//     li.append(deleteButton);
//     todoList.append(li);
  
//     todo.value = '';
//   }


//   function filterTodos(event) {
//     const searchText = event.target.value.toLowerCase();
//     const liItems = document.querySelectorAll('.todo-item');
  
//     liItems.forEach(item => {
//       const todoName = item.textContent.toLowerCase();
//       item.style.display = todoName.includes(searchText) ? 'block' : 'none';
//     });
//   }
  
  