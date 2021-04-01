let carta1 = {
    nome: 'Katarina',
    foto: 'https://i.imgur.com/cj9WPpm.jpg',
    atributos:{
        ataque: 62,
        defesa: 33,
        magia: 73
    }    
}
let carta2 = {
    nome: 'Lux',
    foto: 'https://i.imgur.com/d5hmBCd.jpg',
    atributos:{
        ataque: 35,
        defesa: 38,
        magia: 76
    } 
}
let carta3 = {
    nome: 'Caitlyn',
    foto: 'https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2021/03/04/51022-700x413.jpg',
    atributos:{
        ataque: 77,
        defesa: 25,
        magia: 36
    } 
}
let carta4 = {
    nome: "Cho'Gath",
    foto: "https://i.imgur.com/018AGPn.jpg",
    atributos:{
        ataque: 30,
        defesa: 66,
        magia: 71
    }    
}
let carta5 = {
    nome: 'Nasus',
    foto: 'https://i.imgur.com/A1ndkwi.jpg',
    atributos:{
        ataque: 58,
        defesa: 62,
        magia: 36
    } 
}
let carta6 = {
    nome: 'Shen',
    foto: 'https://i.imgur.com/UqTL4jF.jpg',
    atributos:{
        ataque: 44,
        defesa: 72,
        magia: 39
    } 
}

let carta7 = {
    nome: 'Elise',
    foto: 'https://i.imgur.com/t360nLi.jpg',
    atributos:{
        ataque: 30,
        defesa: 55,
        magia: 65
    } 
}

let carta8 = {
    nome: 'Ahri',
    foto: 'https://i.imgur.com/08qYdgb.jpg',
    atributos:{
        ataque: 30,
        defesa: 42,
        magia: 72
    } 
}

let carta9 = {
    nome: 'Rammus',
    foto: 'https://i.imgur.com/cnRyvcO.jpg',
    atributos:{
        ataque: 30,
        defesa: 70,
        magia: 40
    } 
}

let carta10 = {
    nome: 'Riven',
    foto: 'https://i.imgur.com/RggK2e3.jpg',
    atributos:{
        ataque: 70,
        defesa: 34,
        magia: 18
    } 
}

let carta11 = {
    nome: 'Akali',
    foto: 'https://i.imgur.com/H6j8pyl.jpg',
    atributos:{
        ataque: 62,
        defesa: 40,
        magia: 69
    } 
}

let carta12 = {
    nome: 'Nidalee',
    foto: 'https://i.imgur.com/6vSDEI1.jpg',
    atributos:{
        ataque: 42,
        defesa: 35,
        magia: 55
    } 
}

let carta13 = {
    nome: 'Swain',
    foto: 'https://i.imgur.com/lmQRbmz.jpg',
    atributos:{
        ataque: 10,
        defesa: 44,
        magia: 69
    } 
}

let carta14 = {
    nome: 'Viego',
    foto: 'https://i.imgur.com/h4qMnNW.jpg',
    atributos:{
        ataque: 70,
        defesa: 40,
        magia: 10
    } 
}

let baralho = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14]
let meuBaralho = []

function distribuiCartas(){
    for (let minhasCartas = 0; minhasCartas < 7; minhasCartas++){
        let indiceAleatorio = Math.floor(Math.random() * baralho.length)

        if(indiceAleatorio >= baralho.length && indiceAleatorio >= baralho.length){
        indiceAleatorio = (baralho.length-1)
        }

        meuBaralho.push(baralho.splice(indiceAleatorio, 1)[0]);
        
    }
}

distribuiCartas()

let cartaMaquina
let cartaJogador
let minhaCarta = document.querySelector('#cartaEscolhida')
let campoJogador = document.querySelector('.cartaJogador')
let campoMaquina = document.querySelector('.cartaMaquina')
let pontos = document.querySelector('.pontuacao')
let versus = document.querySelector('.versus')

pontos.innerHTML = `Jogador possui ${meuBaralho.length} cartas | Máquina possui ${baralho.length} cartas`


function sortearCarta(){    
        numeroCartaMaquina = Math.floor(Math.random() * baralho.length) 
        numeroCartaJogador = Math.floor(Math.random() * meuBaralho.length)

        if(numeroCartaMaquina >= baralho.length && numeroCartaJogador >= meuBaralho.length){
            numeroCartaMaquina = (baralho.length-1)
        }
        cartaMaquina = baralho[numeroCartaMaquina]

        cartaJogador = meuBaralho[numeroCartaJogador]
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
        resultado.innerHTML = 'Parabéns, você ganhou!'
        meuBaralho.push
        meuBaralho.push(baralho.splice(numeroCartaMaquina, 1)[0]);

    } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        resultado.innerHTML = 'Você perdeu!'
        baralho.push(meuBaralho.splice(numeroCartaJogador, 1)[0]);
    } else{
        resultado.innerHTML = 'Empate'
    }
    
    document.getElementById('campoBatalha').style.display="flex"
    document.getElementById('escolhaAtributo').style.display="none"
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnNovoJogo').disabled = false
    pontos.innerHTML = `Jogador possui ${meuBaralho.length} cartas | Máquina possui ${baralho.length} cartas`
}


function novoJogo(){

    if(baralho.length == 0){
        resultado.innerHTML = `As cartas do seu oponente acabaram, e você ganhou o jogo.<br> Parabéns!`
        baralho = meuBaralho
        escodeButton()
    }else if(meuBaralho.length == 0){
        resultado.innerHTML = `As cartas acabaram, e você perdeu o jogo.<br> Boa sorte na próxima vez`
        escodeButton()
    }else{
        document.getElementById('btnNovoJogo').disabled = true
        minhaCarta.style.display = "none"
        document.getElementById('escolhaAtributo').style.display="none" 
        campoJogador.innerHTML = ''
        versus.innerHTML = ''
        campoMaquina.innerHTML = ''
        resultado.innerHTML = ''
        sortearCarta()
        pontos.innerHTML = `Jogador possui ${meuBaralho.length} cartas | Máquina possui ${baralho.length} cartas`
    }
}

function reiniciarJogo(){
    meuBaralho = []
    distribuiCartas()
    pontos.innerHTML = `Jogador possui ${meuBaralho.length} cartas | Máquina possui ${baralho.length} cartas`
    resultado.innerHTML = ''
    mostraButton()

}

function escodeButton(){
    document.getElementById('reiniciarJogo').style.display="inline-block"
    document.getElementById('btnJogar').style.display="none"
    document.getElementById('btnNovoJogo').style.display="none" 
    campoJogador.innerHTML = ''
    versus.innerHTML = ''
    campoMaquina.innerHTML = ''

}

function mostraButton(){
    document.getElementById('reiniciarJogo').style.display="none"
    document.getElementById('btnJogar').style.display="inline-block"
    document.getElementById('btnNovoJogo').style.display="inline-block" 
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnSortear').style.display="inline-block"
    document.getElementById('reiniciarJogo').style.display="none" 
}