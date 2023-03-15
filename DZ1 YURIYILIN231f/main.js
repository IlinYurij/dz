const password = document.getElementById("password")
const password1 = document.getElementById("password1")
const pass_button = document.querySelector('.passchek')
const result = document.querySelector('.result')
const email = document.querySelector('#email')
const little_block = document.querySelector('.littlebox')

const passRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.(com|ru)$/
pass_button.addEventListener("click", () => {
    if (passRegExp.test(password.value) && emailRegexp.test(email.value)) {
        if (password.value === password1.value) {
            result.innerHTML = 'Пароль корректен!'
        }

    } else result.innerHTML = 'Проверьте правильность написания пароля!!!'

})
const open = document.querySelector('.open')
open.onclick = () => {
    password.setAttribute('type', 'text')
    password1.setAttribute('type', 'text')
}
position=0
setInterval(()=>{
    if(position<=450)
        position++
        little_block.style.left=`${position}px`
},10)







