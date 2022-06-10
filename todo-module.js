'use strict'

const method = {
  POST: 'POST'
}

const baseURL = 'http://localhost:3000/api';
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

export {addTodo, deleteTodo, toggleTodo};