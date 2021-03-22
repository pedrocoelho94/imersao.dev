const p = document.querySelector('.resultado')

function reset(){
    document.getElementById('valor').value = ''
    p.innerHTML = ''
}

function converter(){
    let valorConvertido
    let moeda = document.getElementById('moedas').value
    let valor = document.getElementById('valor').value

    if(moeda === '' || valor === ''){
        p.innerHTML = 'Moeda e/ou valor não selecionados!'
        return false
    }

    if(isNaN(valor)){
        p.innerHTML = 'Digite um valor válido!'        
    }else{
        if(moeda === 'dolar'){
            valorConvertido = valor*5.53
        }else if(moeda === 'euro'){
            valorConvertido = valor*6.60
        }else if(moeda === 'libra'){
            valorConvertido = valor*7.67
        }
        valorConvertido = valorConvertido.toFixed(2)     
        p.innerHTML = `R$${valorConvertido}`
    }

}