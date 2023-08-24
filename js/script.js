const nome = document.querySelector('#nome')
const salarioBruto = document.querySelector('#salario')
const calcular = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')
const result = document.querySelector('#result')
const saudacao = document.querySelector('#saudacao')
const container = document.querySelector('#container')
const btnOk = document.querySelector('#btnOk')
const body = document.body

calcular.addEventListener('click', calcularSalario)
calcular.addEventListener('click', mudarFundo)
btnOk.addEventListener('click', voltarFundo)

function mudarFundo() {
    resultado.classList.add('view')
    container.classList.add('noView')
}
function voltarFundo() {
    resultado.classList.remove('view')
    container.classList.remove('noView')
}

function calcularSalario(){
    let salBruto = parseFloat(salarioBruto.value)
    
    if(salBruto >= 3500){
        let salarioLiquido = (salBruto - ((salBruto*(18/100))+ (salBruto*(5/100))))
        result.innerHTML = `<h3>Olá ${nome.value} Seu salário liquido é de ${salarioLiquido}</h3>`
    }
    else if(salBruto<=3500 && salBruto>=0){
        let salarioLiquido = (salBruto - ((salBruto*(8/100) + (salBruto*(5/100)))))
        result.innerHTML = `<h3>Olá ${nome.value} Seu salário liquido é de ${salarioLiquido}</h3>`
    }else{
        result.innerHTML = `<h3>Por favor insira um valor válido</h3>`   
    }
}

let horario = new Date()
let hora = horario.getHours()

if (hora >= 6 && hora <= 17) {
    body.classList.add('light')
    // container.classList.add('dark')
    resultado.classList.add('dark')
    saudacao.innerHTML = `<h1>Bom dia Paizão</h1>`
}else{
    body.classList.add('dark')
    // container.classList.add('light')
    resultado.classList.add('light')
    saudacao.innerHTML = `<h1>Boa noite Paizão</h1>`
}


