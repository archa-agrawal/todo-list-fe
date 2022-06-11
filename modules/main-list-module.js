'use strict'

import {loadList} from './todo-module.js'
import createTodoComponent from '../components/todo-component.js'

const DIV_ID = 'mainlist';

const printList = () => {
  loadList().then(
    (todoList) => {
      _cleanupTodos();
      for (let todo of todoList) {
        const todoElement = createTodoComponent(todo);
        todoElement.addEventListener('change', printList)
        document.getElementById(DIV_ID).appendChild(todoElement)
      }
    }
  )
}

const _cleanupTodos = () => {
  const oldTodoElements = document.getElementsByClassName('todo-container');
  for(let todo = oldTodoElements.length -1; todo > -1; todo--){
    oldTodoElements[todo].remove()
  }
}

export default printList;