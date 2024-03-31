const GET = document.getElementById('GET')
const POST = document.getElementById('POST')
const DELETE = document.getElementById('DELETE')
const PUT = document.getElementById('PUT')
const text = document.getElementById('text')

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
    const userName = document.getElementById('name').value
    const job = document.getElementById('job').value
    const newUser = {
        name: userName,
        job: job
    }
    console.log(newUser)
    
        fetch('https://reqres.in/api/user', {
            mode: 'no-cors',
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        . then (response => 
            console.log(response.body))
        .catch(e => console.log(e))

})

PUT.addEventListener('click', ()=>{
    const userId = document.getElementById('userId').value
    const userName = document.getElementById('name').value
    const job = document.getElementById('job').value
    const newUser = {
        name: userName,
        job: job
    }
    console.log(newUser)
    if(userId === ""){
        alert('Id incorrect')
    }else{
        fetch('https://reqres.in/api/user/' + userId,{
            mode: 'no-cors',
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        . then (response => 
            console.log(response.body))
        .catch(e => console.log(e))
    }
})

DELETE.addEventListener('click', ()=>{
    const userId = document.getElementById('userId').value
    fetch('https://reqres.in/api/user/' + userId,{
        method: 'DELETE',
    })
    . then (response => console.log(response))
    .catch(e => console.log(e))
})
