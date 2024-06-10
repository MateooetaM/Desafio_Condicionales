const img = document.querySelector('#img')
const btn = document.querySelector('#btn')


btn.addEventListener("click", ()=> {
    img.classList.toggle('red')
})