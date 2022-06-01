'use strict'

const baseURL = 'http://localhost:3000/api'

const loadList = (url, id) => {
    fetch(url).then(
        (response) => {
           return response.json()
        }
    ).then((data) => {
        document.getElementById(id).innerHTML = JSON.stringify(data, null, '<br>')
        }
    )   
}
/*
fetch(`${baseURL}/todos`).then(
    (response) => {
       return response.json()
    }
).then((todoData) => {
    loadList('maintext', todoData)
}
)
*/

const addTodo = (url, msg) => {
    fetch(url,
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message:msg}),
        }
    )
}
loadList(`${baseURL}/todos`, 'maintext');
addTodo(`${baseURL}/todo`, 'seventh todo');

