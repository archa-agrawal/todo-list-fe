'use strict'

import {loadList, addTodo, deleteTodo, toggleTodo} from './modules/todo-module.js'

// no need to have base url here. SOC
// rename files and refactor structure
const baseURL = 'http://localhost:3000/api'


const printList = (divId) => {
    loadList().then(
        (array) => {
            console.log(array)
            for (let i=0; i<array.length; i++) {
                let newDiv = document.createElement('div')
                newDiv.innerHTML = array[i].message
                document.getElementById(divId).appendChild(newDiv)
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
                return loadList(`${baseURL}/todos`, 'mainlist')
            }
            throw Error()
        }
    ).catch(() => console.log('error'));
}

document.getElementById("toAdd").addEventListener('click', newAddition)

const deletion = () => {
    const deleteId = document.getElementById("deletebox").value;
    deleteTodo(deleteId).then(
        (response) => {
            if (response.deleted){
                return loadList(`${baseURL}/todos`, 'mainlist')
            }
            throw Error()
        }
    ).catch((error) =>console.log(error));
}
document.getElementById('toDelete').addEventListener('click', deletion)


const doToggle = () => {
    const toggleID = document.getElementById("togglebox").value;
    toggleTodo(toggleID).then(
        (response) => {
            if (response.ok){
                return loadList(`${baseURL}/todos`, 'mainlist')
            }
            throw Error()
        }
    ).catch(()=> console.log('error'))
}
document.getElementById("toToggle").addEventListener('click', doToggle)