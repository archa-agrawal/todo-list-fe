import {deleteTodo, toggleTodo} from '../modules/todo-module.js'
const todoFactory = ({id, message, checked})=> {
  return{
    id,
    message,
    checked,
    toggled : () => toggleTodo(id),
    deleted : () => deleteTodo(id)
  }
}

export default todoFactory;