'use strict'

// defines methods to create todo component

/**
 * 
 * @param {string} message 
 * @param {boolean} checked 
 */
const createTodoComponent = (message, checked) => {
  const containerDiv = document.createElement('div')
  const toggleDiv = document.createElement('div')
  const messageDiv = document.createElement('div')
  const delDiv = document.createElement('div')

  containerDiv.setAttribute('class', 'todo-container');

  const toggle = document.createElement('input');
  toggle.setAttribute('type', 'checkbox');
  toggle.setAttribute('checked', checked);
  toggle.setAttribute('class', 'toggle')
  toggleDiv.appendChild(toggle);
  toggleDiv.setAttribute('class', 'toggle-container')


  messageDiv.textContent = message
  messageDiv.setAttribute('class', 'message-container')

  const delButton = document.createElement('button');
  delButton.textContent = 'X'
  delDiv.appendChild(delButton)
  delDiv.setAttribute('class', 'del-container')


  containerDiv.appendChild(toggleDiv);
  containerDiv.appendChild(messageDiv);
  containerDiv.appendChild(delDiv);

  return containerDiv;
}

export default createTodoComponent;