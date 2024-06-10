const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

btn.addEventListener("click", ()=> {
    const [{ value: a }, { value: b }, { value: c }] = document.querySelectorAll("select")
    let clave = a + b + c
    if (clave == "911") resultado.innerHTML = "Password 1 correcto"
    else if (clave == "714") resultado.innerHTML = "Password 2 correcto"
    else resultado.innerHTML = "Password incorrecto"
})