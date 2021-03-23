const h2 = document.querySelector('h2')
let total

let primeiroValor = parseFloat(prompt('Digite o primeiro valor:'))
let operacao = prompt('Qual operação você quer realizar? Digite um dos operadores a seguir: + - * /')
let segundoValor = parseFloat(prompt('Digite o segundo valor'))

if(operacao === '+'){
    total = primeiroValor + segundoValor
}else if(operacao === '-'){
    total = primeiroValor - segundoValor
}else if(operacao === '*'){
    total = primeiroValor * segundoValor
}else if(operacao === '/'){
    total = primeiroValor / segundoValor
}

if(!isNaN(total)){
    h2.innerHTML = `${primeiroValor} ${operacao} ${segundoValor} = ${total}`
}else{
    h2.innerHTML = 'Inválido'
}
