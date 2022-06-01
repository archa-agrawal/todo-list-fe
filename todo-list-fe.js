const baseURL = 'http://localhost:3000/api'

const loadList = (id, data) => {
    document.getElementById(id).innerHTML = JSON.stringify(data, null, '<br>')
}

fetch(`${baseURL}/todos`).then(
    (response) => {
       return response.json()
    }
).then((todoData) => {
    loadList('maintext', todoData)
}
)
