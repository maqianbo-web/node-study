const userName = document.querySelector('#userName')
const passWord = document.querySelector('#passWord')
const getLogin = document.querySelector('#getLogin')
const postLogin = document.querySelector('#postLogin')


getLogin.onclick = () => {
    fetch(`http://localhost:3000/api/login?userName=${userName.value}&passWord=${passWord.value}`)
    .then(res => res.json())
    .then(data => {
        console.log('data',data)
    })
}

postLogin.onclick = () => {
    fetch(`http://localhost:3000/api/postLogin`,{
        method: 'post',
        body: JSON.stringify({
            userName: userName.value,
            passWord: passWord.value
        }),
        headers: {
            'content-Type': 'application/json'
        }
    })
    .then(res => res.text())
    .then(data => {
        console.log('data',data)
    })
}