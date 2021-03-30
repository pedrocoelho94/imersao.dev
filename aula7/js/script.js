let carta1 = {
    nome: 'Katarina',
    foto: 'https://static.wikia.nocookie.net/leagueoflegends/images/1/1e/Katarina_Render.png',
    atributos:{
        ataque: 60,
        defesa: 30,
        magia: 80
    }    
}
let carta2 = {
    nome: 'Lux',
    foto: 'https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Lux_Render.png',
    atributos:{
        ataque: 40,
        defesa: 45,
        magia: 85
    } 
}
let carta3 = {
    nome: 'Caitlyn',
    foto: 'https://static.wikia.nocookie.net/leagueoflegends/images/e/ee/Caitlyn_Render.png',
    atributos:{
        ataque: 90,
        defesa: 25,
        magia: 30
    } 
}
let carta4 = {
    nome: "Cho'Gath",
    foto: "https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Cho'Gath_Render.png",
    atributos:{
        ataque: 30,
        defesa: 70,
        magia: 70
    }    
}
let carta5 = {
    nome: 'Nasus',
    foto: 'https://static.wikia.nocookie.net/leagueoflegends/images/b/bf/Nasus_Render.png',
    atributos:{
        ataque: 70,
        defesa: 75,
        magia: 30
    } 
}
let carta6 = {
    nome: 'Shen',
    foto: 'https://static.wikia.nocookie.net/leagueoflegends/images/a/ac/Shen_Render.png',
    atributos:{
        ataque: 40,
        defesa: 85,
        magia: 35
    } 
}

let baralho = [carta1, carta2, carta3, carta4, carta5, carta6]

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

minhaCarta.style.display = 'none'

function sortearCarta(){
    numeroCartaMaquina = Math.floor(Math.random() * 6)
    numeroCartaJogador = Math.floor(Math.random() * 6)

    if(numeroCartaMaquina > 6 && numeroCartaJogador > 6){
        numeroCartaMaquina = 5
    }
    cartaMaquina = baralho[numeroCartaMaquina]
   
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = Math.floor(Math.random() * 6)
    }

    cartaJogador = baralho[numeroCartaJogador]
    document.getElementById('campoBatalha').style.display="none"
    document.getElementById('btnSortear').style.display="none"
    document.getElementById('btnJogar').disabled = false
    document.getElementById('escolhaAtributo').style.display="block"

    minhaCarta.style.display = 'block'
    minhaCarta.innerHTML = `<div class='info-carta'>
                            <img class="img-carta" src="${cartaJogador.foto}" alt=""><br>
                            Nome: ${cartaJogador.nome}<br>
                            Ataque: ${cartaJogador.atributos.ataque}<br>
                            Defesa: ${cartaJogador.atributos.defesa}<br>
                            Magia: ${cartaJogador.atributos.magia}
                                </div>`

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
    <img class="img-carta" src="${cartaJogador.foto}" alt=""><br>
    Nome: ${cartaJogador.nome}<br>
    Ataque: ${cartaJogador.atributos.ataque}<br>
    Defesa: ${cartaJogador.atributos.defesa}<br>
    Magia: ${cartaJogador.atributos.magia}
    `
    versus.innerHTML = `<img class="img-x" src="https://i.imgur.com/zRf2J4T.png" alt="">`

    campoMaquina.innerHTML = `                       
    <img class="img-carta" src="${cartaMaquina.foto}" alt=""><br>
    Nome: ${cartaMaquina.nome}<br>
    Ataque: ${cartaMaquina.atributos.ataque}<br>
    Defesa: ${cartaMaquina.atributos.defesa}<br>
    Magia: ${cartaMaquina.atributos.magia}
    `
    
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
    document.getElementById('escolhaAtributo').style.display="none"
    document.getElementById('btnSortear').style.display="inline-block"
    campoJogador.innerHTML = ''
    versus.innerHTML = ''
    campoMaquina.innerHTML = ''
    resultado.innerHTML = ''
}