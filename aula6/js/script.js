let exemplo = {
    nome: 'Exemplo', 
    vitoria: 1, 
    empates: 3,
    derrotas: 1,
    jogos: 0,
    pontos: 0
}


function calculaPontos(jogador){
    let pontos = (jogador.vitoria * 3) + jogador.empates
    return pontos
}

function totalJogos(jogador){
    let totalJogos = jogador.vitoria + jogador.empates + jogador.derrotas
    return totalJogos
}

exemplo.pontos = calculaPontos(exemplo)
exemplo.jogos = totalJogos(exemplo)


let jogadores = [exemplo]

exibirJogaresNaTela(jogadores)

function exibirJogaresNaTela(player){
    let html = ""
    posicao = 1
    for(let i = 0; i < jogadores.length; i++){
        html += `<tr> <td><button class="remover" onClick="removerJogador(${i})">X</button></td>  <td>${posicao}°</td>
                      <td>${player[i].nome}</td>
                      <td>${player[i].jogos}</td>
                      <td>${player[i].vitoria}</td>
                      <td>${player[i].empates}</td>
                      <td>${player[i].derrotas}</td>
                      <td>${player[i].pontos}</td>
                      <td><button class="vitoria" onClick="adicionarVitoria(${i})">Vitória</button></td>
                      <td><button class="empate" onClick="adicionarEmpate(${i})">Empate</button></td>
                      <td><button class="derrota" onClick="adicionarDerrota(${i})">Derrota</button></td></tr> 
                     `
                     posicao++
    }
    let tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
    
}
console.log(jogadores)
function removerJogador(i){
    jogadores.splice(i, 1)
    exibirJogaresNaTela(jogadores)
}

function adicionarVitoria(i){
    let jogador = jogadores[i]
    jogador.vitoria++
    jogador.pontos = calculaPontos(jogador)
    jogador.jogos = totalJogos(jogador)
    exibirJogaresNaTela(jogadores)
}

function adicionarEmpate(i){
    let jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    jogador.jogos = totalJogos(jogador)
    exibirJogaresNaTela(jogadores)
}

function adicionarDerrota(i){
    let jogador = jogadores[i]
    jogador.derrotas++
    jogador.jogos = totalJogos(jogador)
    exibirJogaresNaTela(jogadores)
}

function resetPontos(){
    for(let i = 0; i < jogadores.length; i++){   
        jogadores[i].vitoria = 0
        jogadores[i].empates = 0
        jogadores[i].derrotas = 0
        jogadores[i].jogos = 0
        jogadores[i].pontos = 0
        exibirJogaresNaTela(jogadores)
    }
}

function novoJogador() {
    document.querySelector('.cadastro').classList.add('ativo')
  }

function fechaCadastro(){
    document.querySelector('.cadastro').classList.remove('ativo')
    document.getElementById('nomeNovoJogador').value = ""
}

function salvarJogador(){
    let novoJogador = document.getElementById('nomeNovoJogador').value

    if(novoJogador == '' || novoJogador == 'Digite um nome válido!'){
        document.getElementById('nomeNovoJogador').value = 'Digite um nome válido!'
    }else{
    novoJogador = {
        nome: novoJogador, 
        vitoria: 0, 
        empates: 0,
        derrotas: 0,
        jogos: 0,
        pontos: 0       
    }
    document.getElementById('nomeNovoJogador').value = ""
    jogadores.push(novoJogador)
    exibirJogaresNaTela(jogadores)}
    }

function limparCampo(){
    let novoJogador = document.getElementById('nomeNovoJogador').value
    if (novoJogador == 'Digite um nome válido!'){
        document.getElementById('nomeNovoJogador').value = ""
    }
 }

 function atualizaTabela(){
    sortByPoints()
 }


function  sortByPoints(){
    function compare(a, b) {
        if (a.pontos > b.pontos){
          return -1;
        }
        if (a.pontos < b.pontos){
          return 1;
        }
        return 0;
      }
    
      jogadores.sort(compare)
      exibirJogaresNaTela(jogadores)
 }
