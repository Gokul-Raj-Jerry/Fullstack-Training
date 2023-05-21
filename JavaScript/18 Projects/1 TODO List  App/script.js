const input = document.getElementById('input')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')


let todos = [];

addBtn.addEventListener('click', () => {
  todos.push(input.value)
  console.log(todos)
  addtodo(input.value)
  input.value = ''
})

function addtodo(todo) {
  let para = document.createElement('p')
  para.innerHTML = todo
  todoList.appendChild(para)
  para.addEventListener('click', () => {
    para.style.textDecoration = 'line-through'
    remove(todo)
  })
  para.addEventListener('dblclick', () => {
    todoList.removeChild(para)
    remove(todo)
  }
  )
}

function remove(todo) {
  let index = todos.indexOf(todo)
  if (index > -1)
    todos.splice(index, 1)
}