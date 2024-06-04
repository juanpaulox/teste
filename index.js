function nome(nome){ //Função que guarda valor no local storage e também imprime no console
    window.localStorage.setItem('Nomes', nome)
    if(nome !== ''){
        console.log(nome)
    }
}

document.getElementById('nome').addEventListener('blur' , (event) => {
    nome(event.target.value)
    event.target.style.border = '5px solid #613F75';
})

document.getElementById('nome').addEventListener('focus' , (event) => { //Retirar a borda em fóco
    event.target.style.border = '';
})


///////////ENDEREÇO///////////
function endereco(endereco){ //Função que guarda valor no local storage e também imprime no console
    window.localStorage.setItem('Endereços', endereco)
    if(endereco !== ''){
        console.log(endereco)
    }
}

document.getElementById('endereco').addEventListener('blur' , (event) => {
    endereco(event.target.value)
    event.target.style.border = '5px solid #613F75';
})

document.getElementById('endereco').addEventListener('focus' , (event) => { //Retirar a borda em fóco
    event.target.style.border = '';
})

/////////inicioDaSemana////////

function inicioDaSemana(inicioDaSemana){ //Função que guarda valor no local storage e também imprime no console
    window.localStorage.setItem('Inicio', inicioDaSemana)
    if(inicioDaSemana !== ''){
        console.log(inicioDaSemana)
    }
    
}

document.getElementById('inicioDaSemana').addEventListener('blur', (event) => {
    inicioDaSemana(event.target.value)
    event.target.style.border = '5px solid #613F75';
})

document.getElementById('inicioDaSemana').addEventListener('focus', (event) => { //Retirar a borda em fóco
    event.target.style.border = '';
})

//////////terminoDaSemana/////////

function terminoDaSemana(terminoDaSemana){ //Função que guarda valor no local storage e também imprime no console
    window.localStorage.setItem('Termino', terminoDaSemana)
    if(terminoDaSemana !== ''){
        console.log(terminoDaSemana)
    }
    
}

document.getElementById('terminoDaSemana').addEventListener('blur', (event) => {
    terminoDaSemana(event.target.value)
    event.target.style.border = '5px solid #613F75';
})

document.getElementById('terminoDaSemana').addEventListener('focus', (event) => { //Retirar a borda em fóco
    event.target.style.border = '';
})

///////////abertura///////////////

function aberturaDaSemana(aberturaDaSemana){ //Função que guarda valor no local storage e também imprime no console
    window.localStorage.setItem('Abertura', aberturaDaSemana)
    if(aberturaDaSemana !== ''){
        console.log(aberturaDaSemana)
    }
    
}

document.getElementById('abertura').addEventListener('blur', (event) => {
    aberturaDaSemana(event.target.value)
    event.target.style.border = '5px solid #613F75';
})

document.getElementById('abertura').addEventListener('focus', (event) => { //Retirar a borda em fóco
    event.target.style.border = '';
})

/////////fechamento////////////////

function fechamentoDaSemana(fechamentoDaSemana){ //Função que guarda valor no local storage e também imprime no console
    window.localStorage.setItem('Fechamento', fechamentoDaSemana)
    if(fechamentoDaSemana !== ''){
        console.log(fechamentoDaSemana)
    }
    
}

document.getElementById('fechamento').addEventListener('blur', (event) => {
    fechamentoDaSemana(event.target.value)
    event.target.style.border = '5px solid #613F75';
})

document.getElementById('fechamento').addEventListener('focus', (event) => {//Retirar a borda em fóco
    event.target.style.border = '';
})
