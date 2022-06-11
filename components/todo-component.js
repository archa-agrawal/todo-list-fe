'use strict'

// defines methods to create todo component

/**
 * 
 * @param {string} message 
 * @param {boolean} checked 
 */
const createTodoComponent = (todo) => {
  const containerDiv = document.createElement('div')
  const toggleDiv = document.createElement('div')
  const messageDiv = document.createElement('div')
  const delDiv = document.createElement('div')

  containerDiv.setAttribute('class', 'todo-container');

  const toggle = document.createElement('input');
  toggle.setAttribute('type', 'checkbox');
  toggle.checked = todo.checked;
  toggle.setAttribute('class', 'toggle')
  toggle.addEventListener('change', 
    () => todo.toggled().then(
      () => containerDiv.dispatchEvent(new Event('change'))
    )
  )
  toggleDiv.appendChild(toggle);
  toggleDiv.setAttribute('class', 'toggle-container')


  messageDiv.textContent = todo.message
  messageDiv.setAttribute('class', 'message-container')

  const delButton = document.createElement('button');
  delButton.textContent = 'X'
  delButton.addEventListener('click', 
    () => todo.deleted().then(
      () => containerDiv.dispatchEvent(new Event('change'))
    )
  )
  delDiv.appendChild(delButton)
  delDiv.setAttribute('class', 'del-container')


  containerDiv.appendChild(toggleDiv);
  containerDiv.appendChild(messageDiv);
  containerDiv.appendChild(delDiv);

  return containerDiv;
}

export default createTodoComponent;