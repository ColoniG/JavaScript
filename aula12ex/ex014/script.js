function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
   
    minuto = (minuto).toLocaleString('pt-BR', {  // ESSA PARTE DO CÓDIGO
        minimumIntegerDigits: 2,                 // COLOCAR ZERO A ESQUERDA
        useGrouping: false
    })
    
    msg.innerHTML = `A hora exata é ${hora}:${minuto}.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        saldac.innerHTML = 'BOM DIA!'
        document.body.style.background = '#e7dd00'

    } else if (hora >=12 && hora < 18) {
        img.src = 'tarde.png'
        saldac.innerHTML = 'BOA TARDE!'
        document.body.style.background = '#fec588'

    } else {
        img.src = 'noite.png'
        saldac.innerHTML = 'BOA NOITE!'
        document.body.style.background = '#b9b9bb'
    }

}
