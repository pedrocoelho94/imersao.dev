let pokemonsNome = ['lux', 'diana', 'katarina', 'akali', 'ahri', 'kaisa']
let pokemonsImgs = ["https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Lux_Render.png/revision/latest/scale-to-width-down/422?cb=20200209203614",
                    "https://static.wikia.nocookie.net/leagueoflegends/images/c/c2/Diana_Render.png",
                    "https://static.wikia.nocookie.net/leagueoflegends/images/1/1e/Katarina_Render.png",
                    "https://static.wikia.nocookie.net/leagueoflegends/images/e/ee/Akali_Render.png",
                    "https://static.wikia.nocookie.net/leagueoflegends/images/f/f1/Ahri_Render.png",
                    "https://static.wikia.nocookie.net/leagueoflegends/images/6/6c/Kai'Sa_Render.png"
                   ]

const p = document.querySelector('.resultado')

let random = Math.floor(Math.random()*6)
console.log(random)
document.getElementById("myImg").src = pokemonsImgs[random]

function verificaPersonagem(){
    let char = document.getElementById('campoPersonagem').value
    char = char.toLowerCase()
    console.log(char)
    if(char === pokemonsNome[random]){
        p.innerHTML = 'Parabéns, você acertou o personagem'
    }else{
        p.innerHTML = 'Você errou, tente novamente!'
    }
}

function refresh(){
    random = Math.floor(Math.random()*6)
    document.getElementById("myImg").src = pokemonsImgs[random]
    document.getElementById('campoPersonagem').value = ''
    p.innerHTML = ''
}
