const catalogo = document.querySelector('#catalogo')
const msg = document.querySelector('.operacao')


let filmes = ['inception', 'sing street', 'whiplash', 'hamilton', 'ready player one', 'promising young woman']

let listaImgFilmes = ['https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BMjEzODA3MDcxMl5BMl5BanBnXkFtZTgwODgxNDk3NzE@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BZDViMzBiNGMtZTIyNS00NzI4LWE3NDMtNmM1NDk0NzBlMWRlXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_UX182_CR0,0,182,268_AL_.jpg']


function exibeFilmes(){
    for (let i = 0; i < filmes.length; i++) {
        catalogo.innerHTML += `
        <div class='singleFilm'>
        <img src="${listaImgFilmes[i]}">
        <span class='nomeFilme'>${filmes[i]}</span>
        </div>
        `
    }
}

exibeFilmes()


function addFilme(){
        
    let newFilme = (prompt('Digite o nome de um filme')).toLowerCase()
    let newImgFilme = prompt('URL da capa do filme:')
   

    if(newFilme == '' || newImgFilme == ''){
        alert('Um dos campos está vázio!')
    }else if(newFilme == null || newImgFilme == null){
        msg.innerHTML = 'Operação Cancelada<span onclick="fecharMensagem()" class="close" title="Fechar">x</span>'
        mostrarMensagem()
    }else{
        filmes.push(newFilme)
        listaImgFilmes.push(newImgFilme)
        catalogo.innerHTML += `
        <div class='singleFilm'>
        <img onclick="trailer()" src="${listaImgFilmes[listaImgFilmes.length-1]}">
        <span class='nomeFilme'>${filmes[filmes.length-1]}</span>
        </div>
        `
        msg.innerHTML = 'Filme Adicionado com Sucesso<span onclick="fecharMensagem()" class="close" title="Fechar">x</span>'
        mostrarMensagem()
    }
    
}


function removerFilme(){
    let deleteFilme = prompt('Qual filme deseja remover?')
    deleteFilme = deleteFilme.toLowerCase()

    if(filmes.indexOf(deleteFilme) == -1){
        msg.innerHTML = 'Filme Não Encontrado<span onclick="fecharMensagem()" class="close" title="Fechar">x</span>'
        mostrarMensagem()
    }else{
        deleteIndice = filmes.indexOf(deleteFilme)
        filmes.splice(deleteIndice,1)
        listaImgFilmes.splice(deleteIndice,1)
        catalogo.innerHTML = ''
        exibeFilmes()
        msg.innerHTML = 'Filme Removido com Sucesso<span onclick="fecharMensagem()" class="close" title="Fechar">x</span>'
        mostrarMensagem()
       
    }
  
}
function fecharMensagem(){
    document.getElementById("msg").style.display = 'none'; 
}

function mostrarMensagem(){
    document.getElementById("msg").style.display = 'block'; 
}


