'use strict'

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

const addTodo = (message) => {
    return fetch(`${baseURL}/todo`,
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message:message}),
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