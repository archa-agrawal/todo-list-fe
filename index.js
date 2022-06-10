'use strict'

import {loadList, addTodo, deleteTodo, toggleTodo} from './modules/todo-module.js'
import createTodoComponent from './components/todo-component.js'

// no need to have base url here. SOC
// rename files and refactor structure
const baseURL = 'http://localhost:3000/api'
const divId = 'mainlist'


const printList = () => {
  loadList().then(
    (todoList) => {
      const oldTodoElements = document.getElementsByClassName('todo-container');
      console.log(oldTodoElements)
      for(let todo = oldTodoElements.length -1; todo > -1; todo--){
        oldTodoElements[todo].remove()
      }
      for (let todo of todoList) {
        const todoElement = createTodoComponent(todo.message, todo.checked);
        document.getElementById(divId).appendChild(todoElement)
      }
    }
  )
}
printList('mainlist')

const newAddition = () => {
    const userInput = document.getElementById("addbox").value
    addTodo(userInput).then(
        (response) => {
            if(response.ok){
                return printList()
            }
            throw Error()
        }
    ).catch(() => console.log('error'));
}

document.getElementById("toAdd").addEventListener('click', newAddition)