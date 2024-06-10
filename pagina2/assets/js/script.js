const n1 = document.querySelector('#n1')
const n2 = document.querySelector('#n2')
const n3 = document.querySelector('#n3')
const btn = document.querySelector('#btn')

btn.addEventListener("click", ()=> {
    let suma = Number(n1.value) + Number(n2.value) + Number(n3.value)
    console.log(suma);
    const element = document.querySelector('#resultado')
    if (suma <= 10){
        element.innerHTML = 'Llevas ' + suma + ' elementos'
    }
    else {
        element.innerHTML = 'Llenas demasiados stickers'
    }
})

