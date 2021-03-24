let numeroSecreto = Math.ceil(Math.random()*10)
console.log(numeroSecreto)

let chute = 0
let tentativas = 3
const p = document.querySelector('.resultado')
const t = document.querySelector('.tentativas')
const campoNumero = document.getElementById('campoNumero')
const btnVerificar = document.getElementById('btnVerificar')


t.innerHTML = `Você tem ${tentativas } tentativas restantes.`


function verificaNumero(){

    while(tentativas > 0){
        chute = campoNumero.value
        campoNumero.value = ''

        if(!isNaN(chute)){
            if(chute == numeroSecreto){
                p.innerHTML = 'Você acertou!'
                campoNumero.disabled = true
                campoNumero.value = chute
                btnVerificar.disabled = true
                t.innerHTML = ''
                break
            }else if (chute > numeroSecreto){   
                tentativas--   
                p.innerHTML = 'O número é menor'   
                t.innerHTML = `Você tem ${tentativas} tentativas restantes.`  
                break
            }else if (chute < numeroSecreto){
                tentativas--  
                p.innerHTML = 'O número é maior'
                t.innerHTML = `Você tem ${tentativas} tentativas restantes.`
                break
            }  
        }else{
            p.innerHTML = 'Digite um número válido!'
            t.innerHTML = `Você tem ${tentativas} tentativas restantes.`
            break
        }
    }
        
    if(tentativas == 0){
        t.innerHTML = `Você perdeu, o número era ${numeroSecreto}.`
        p.innerHTML = ''
        campoNumero.value = "FIM"
        campoNumero.disabled = true
        btnVerificar.disabled = true
    }
  
}

function novoJogo(){
    numeroSecreto = Math.ceil(Math.random()*10)
    tentativas = 3
    campoNumero.disabled = false
    campoNumero.value = ''
    p.innerHTML = ''
    t.innerHTML = `Você tem ${tentativas} tentativas restantes.` 
    console.log(numeroSecreto)
    btnVerificar.disabled = false
}