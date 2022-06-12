'use strict'

import todoFactory from "../factory/todo-factory.js";

// This module is used to talk to the todo backend

const baseURL = 'http://localhost:3000/api';

const method = {
  POST: 'POST'
}

const loadList = async () => {
  const response = await fetch(`${baseURL}/todos`);
  const todoList = await response.json();
  return todoList.map((todo) => todoFactory(todo))
}


// Add documentation on methods
// try to avoid using string literals
// add proper error handling
const addTodo = (message) => {
  return fetch(`${baseURL}/todo`,
      {
        method: method.POST,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({message:message}),
      }
  )
}

/**
 * 
 * @param {string} id
 *  
 */
const deleteTodo = (id) => {
  return fetch(`${baseURL}/todo/${id}`,
      {
          method: 'DELETE'      
      }
  ).then((response) => {
    return response.json()
  }).catch(()=>{
    throw Error('Network issue while deleting')
  })
}

/**
 * 
 * @param {string} id 
 * @returns {Promise}
 */
const toggleTodo = (id) => {
  return fetch(`${baseURL}/todo/${id}/toggle`,
      {
          method: 'PUT'
      }
  )
}

export {loadList, addTodo, deleteTodo, toggleTodo};