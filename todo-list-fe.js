const baseURL = 'http://localhost:3000/api'

const loadList = (data) => {
   return document.getElementById('maintext').innerHTML = JSON.stringify(data)
}

fetch(`${baseURL}/todos`).then(
    (response) => {
       return response.json()
    }
).then((todoData) => {
    return loadList(todoData)
}
)
