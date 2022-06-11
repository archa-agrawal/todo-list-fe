'use strict'

import printList from './modules/main-list-module.js'
import newAddition from './modules/add-todo-module.js'

printList()
document.getElementById("toAdd").addEventListener('click', newAddition)

