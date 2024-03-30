const name = document.getElementById('name').value
const job = document.getElementById('job').value
const userId = document.getElementById('userId').value
const GET = document.getElementById('GET')
const POST = document.getElementById('POST')
const DELETE = document.getElementById('DELETE')
const PUT = document.getElementById('PUT')
const text = document.getElementById('text')

const newUser = {
    name: 'hello',
    job: 'por'
}

GET.addEventListener('click', ()=>{
    fetch('https://reqres.in/api/user')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        text.innerText = JSON.stringify(data.data)
    })
    .catch(function(e){
        console.log(e)
    })
})

POST.addEventListener('click', ()=>{
    console.log(newUser)
    fetch('https://reqres.in/api/users',{
        redirect: 'follow',
        mode: 'no-cors',
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then (response => console.log(response))
    .catch(e => console.log(e))
})

PUT.addEventListener('click', ()=>{
    fetch('https://reqres.in/api/user/' + userId,{
        mode: 'no-cors',
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    . then (response => response.json())
    . then (data => text.innerText = data)
    .catch(e => console.log(e))
})