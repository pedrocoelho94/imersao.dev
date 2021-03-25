const catalogo = document.querySelector('#catalogo')

let filmes = ['Inception', 'Sing Street', 'Whiplash', 'Hamilton', 'Ready Player One', 'Promising Young Woman']

let listaImgFilmes = ['https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BMjEzODA3MDcxMl5BMl5BanBnXkFtZTgwODgxNDk3NzE@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BZDViMzBiNGMtZTIyNS00NzI4LWE3NDMtNmM1NDk0NzBlMWRlXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_UX182_CR0,0,182,268_AL_.jpg']


for (let i = 0; i < filmes.length; i++) {
    catalogo.innerHTML += `
    <div class='singleFilm'>
    <img src="${listaImgFilmes[i]}">
    <span>${filmes[i]}</span>
    </div>
    `
}

function addFilme(){
    let newFilme = prompt('Digite o nome de um filme')
    let newImgFilme = prompt('Url da capa do filme')

    if(newFilme == '' || newImgFilme == ''){
        alert('Um dos campos está vázio!')
    }else{
        filmes.push(newFilme)
        listaImgFilmes.push(newImgFilme)
        catalogo.innerHTML += `
        <div class='singleFilm'>
        <img src="${listaImgFilmes[listaImgFilmes.length-1]}">
        <span>${filmes[filmes.length-1]}</span>
        </div>
        `
    }
}

