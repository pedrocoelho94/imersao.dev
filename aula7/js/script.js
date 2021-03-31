let carta1 = {
    nome: 'Katarina',
    foto: 'https://i.imgur.com/cj9WPpm.jpg',
    atributos:{
        ataque: 60,
        defesa: 30,
        magia: 70
    }    
}
let carta2 = {
    nome: 'Lux',
    foto: 'https://i.imgur.com/d5hmBCd.jpg',
    atributos:{
        ataque: 40,
        defesa: 50,
        magia: 75
    } 
}
let carta3 = {
    nome: 'Caitlyn',
    foto: 'https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2021/03/04/51022-700x413.jpg',
    atributos:{
        ataque: 80,
        defesa: 25,
        magia: 30
    } 
}
let carta4 = {
    nome: "Cho'Gath",
    foto: "https://i.imgur.com/018AGPn.jpg",
    atributos:{
        ataque: 30,
        defesa: 70,
        magia: 70
    }    
}
let carta5 = {
    nome: 'Nasus',
    foto: 'https://i.imgur.com/A1ndkwi.jpg',
    atributos:{
        ataque: 70,
        defesa: 75,
        magia: 30
    } 
}
let carta6 = {
    nome: 'Shen',
    foto: 'https://i.imgur.com/UqTL4jF.jpg',
    atributos:{
        ataque: 45,
        defesa: 80,
        magia: 35
    } 
}

let carta7 = {
    nome: 'Elise',
    foto: 'https://i.imgur.com/t360nLi.jpg',
    atributos:{
        ataque: 35,
        defesa: 50,
        magia: 70
    } 
}

let carta8 = {
    nome: 'Ahri',
    foto: 'https://i.imgur.com/08qYdgb.jpg',
    atributos:{
        ataque: 30,
        defesa: 40,
        magia: 75
    } 
}

let carta9 = {
    nome: 'Rammus',
    foto: 'https://i.imgur.com/cnRyvcO.jpg',
    atributos:{
        ataque: 35,
        defesa: 80,
        magia: 45
    } 
}

let carta10 = {
    nome: 'Riven',
    foto: 'https://i.imgur.com/RggK2e3.jpg',
    atributos:{
        ataque: 90,
        defesa: 55,
        magia: 15
    } 
}

let baralho = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]

let cartaMaquina
let cartaJogador
let minhaCarta = document.querySelector('#cartaEscolhida')
let campoJogador = document.querySelector('.cartaJogador')
let campoMaquina = document.querySelector('.cartaMaquina')
let pontos = document.querySelector('.pontuacao')
let versus = document.querySelector('.versus')
let ptsJogador = 0
let ptsMaquina = 0

pontos.innerHTML = `Jogador - ${ptsJogador} | ${ptsMaquina} - Máquina `

function sortearCarta(){
    numeroCartaMaquina = Math.floor(Math.random() * 10)
    numeroCartaJogador = Math.floor(Math.random() * 10)

    if(numeroCartaMaquina > 10 && numeroCartaJogador > 10){
        numeroCartaMaquina = 9
    }
    cartaMaquina = baralho[numeroCartaMaquina]
   
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = Math.floor(Math.random() * 10)
    }

    cartaJogador = baralho[numeroCartaJogador]
    document.getElementById('campoBatalha').style.display="none"
    document.getElementById('btnSortear').style.display="none"
    document.getElementById('btnJogar').disabled = false
    document.getElementById('escolhaAtributo').style.display="block"

    minhaCarta.style.display = 'block'

    minhaCarta.innerHTML = `
    <div class='carta'>
    <div class="nomeCarta">${cartaJogador.nome}</div>
    <img class="imgCarta" src="${cartaJogador.foto}" alt="">             
    <div class="atributosCarta">
    <div class="bg1"><span>Ataque</span><span>${cartaJogador.atributos.ataque}</span></div>
    <div class="bg2"><span>Defesa</span><span>${cartaJogador.atributos.defesa}</span></div>
    <div class="bg1"><span>Magia</span><span>${cartaJogador.atributos.magia}</span></div>
    </div></div>`                           

     exibirOpcoes()
     
}

function exibirOpcoes(){
    let opcoes = document.getElementById('opcoes')
    let opcoesTexto = ''
    for (let atributo in cartaJogador.atributos){
        opcoesTexto += `<div><input  type='radio' name='atributo' value='${atributo}'>${atributo}</div>`
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
    let radioAtributo = document.getElementsByName('atributo')
    for (let i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
    
}

let resultado = document.querySelector('#resultado')

function jogar(){
    let atributoSelecionado =  obtemAtributoSelecionado()
    minhaCarta.innerHTML = ''
    campoJogador.innerHTML = `
    <div class='carta'>
    <div class="nomeCarta">${cartaJogador.nome}</div>
    <img class="imgCarta" src="${cartaJogador.foto}" alt="">             
    <div class="atributosCarta">
    <div class="bg1"><span>Ataque</span><span>${cartaJogador.atributos.ataque}</span></div>
    <div class="bg2"><span>Defesa</span><span>${cartaJogador.atributos.defesa}</span></div>
    <div class="bg1"><span>Magia</span><span>${cartaJogador.atributos.magia}</span></div>
    </div></div>`

    versus.innerHTML = `<img class="img-x" src="https://i.imgur.com/zRf2J4T.png" alt="">`

    campoMaquina.innerHTML = `
    <div class='carta'>
    <div class="nomeCarta">${cartaMaquina.nome}</div>
    <img class="imgCarta" src="${cartaMaquina.foto}" alt="">             
    <div class="atributosCarta">
    <div class="bg1"><span>Ataque</span><span>${cartaMaquina.atributos.ataque}</span></div>
    <div class="bg2"><span>Defesa</span><span>${cartaMaquina.atributos.defesa}</span></div>
    <div class="bg1"><span>Magia</span><span>${cartaMaquina.atributos.magia}</span></div>
    </div></div>`
    
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        console.log(`Jogador: ${cartaJogador.atributos[atributoSelecionado]}`)
        console.log(`Máquina: ${cartaMaquina.atributos[atributoSelecionado]}`)
        resultado.innerHTML = 'Parabéns, você ganhou!'
        ptsJogador++
    } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        console.log(`Jogador: ${cartaJogador.atributos[atributoSelecionado]}`)
        console.log(`Máquina: ${cartaMaquina.atributos[atributoSelecionado]}`)
        resultado.innerHTML = 'Você perdeu!'
        ptsMaquina++
    } else{
        console.log(`Jogador: ${cartaJogador.atributos[atributoSelecionado]}`)
        console.log(`Máquina: ${cartaMaquina.atributos[atributoSelecionado]}`)
        resultado.innerHTML = 'Empate'
    }
    
    document.getElementById('campoBatalha').style.display="flex"
    document.getElementById('escolhaAtributo').style.display="none"
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnNovoJogo').disabled = false
    pontos.innerHTML = `Jogador - ${ptsJogador} | ${ptsMaquina} - Máquina `
}

function novoJogo(){
    document.getElementById('btnNovoJogo').disabled = true
    document.getElementById('btnSortear').disabled = false
    minhaCarta.style.display = "none"
    document.getElementById('escolhaAtributo').style.display="none"
    document.getElementById('btnSortear').style.display="inline-block"
    campoJogador.innerHTML = ''
    versus.innerHTML = ''
    campoMaquina.innerHTML = ''
    resultado.innerHTML = ''
}