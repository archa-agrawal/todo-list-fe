'use strict'

import {addTodo, deleteTodo, toggleTodo} from './todo-module.js'

let errorCounter = 0;

// no need to have base url here. SOC
// rename files and refactor structure
const baseURL = 'http://localhost:3000/api'

const loadList = (url, divId) => {
    fetch(url).then(
        (response) => {
            if(response.ok){
                return response.json()
            }
            throw Error()
        }
    ).then(
        (data) => {
            document.getElementById(divId).innerHTML = JSON.stringify(data, null, '<br>')
        }
    )
}

loadList(`${baseURL}/todos`, 'maintext');

const newAddition = () => {
    const userInput = document.getElementById("addbox").value
    addTodo(userInput).then(
        (response) => {
            if(response.ok){
                return loadList(`${baseURL}/todos`, 'maintext')
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
                return loadList(`${baseURL}/todos`, 'maintext')
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
                return loadList(`${baseURL}/todos`, 'maintext')
            }
            throw Error()
        }
    ).catch(()=> console.log('error'))
}
document.getElementById("toToggle").addEventListener('click', doToggle)