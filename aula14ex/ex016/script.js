function contar() {
    let n1 = document.getElementById('txtIni')
    let n2 = document.getElementById('txtFim')  
    let n3 = document.getElementById('txtPas') 
    let res = document.getElementById('res')

    let ini = Number(n1.value)
    let fim = Number(n2.value)  
    let pas = Number(n3.value) 
    
    if (n1.value.length == 0 || n2.value.length == 0) {
        window.alert('Impossível contar!')

    } else if (Number(n3.value)==0) { 
        if (ini < fim) {
            window.alert('Passo inválido! Considerando PASSO 1.')
            res.innerHTML = `Contando:<br> `
            for (ini; ini<=fim; ini++){  
                res.innerHTML +=  `  ${ini} <span>&#128073;`
            } 
        } else { 
            window.alert('Passo inválido! Considerando PASSO 1.')
            res.innerHTML = `Contando:<br> `
               
            for (ini; ini>=fim; ini--){  
                res.innerHTML +=  `  ${ini} <span>&#128073;`
            } 
        } res.innerHTML += `</span> &#127937;`
    } else {
        if (ini < fim) {
            res.innerHTML = `Contando:<br> `
            for (ini; ini<=fim; ini=ini+pas){  
                res.innerHTML +=  `  ${ini} <span>&#128073;`
            } 
        } else {
            res.innerHTML = `Contando:<br> `
            for (ini; ini>=fim; ini=ini-pas){  
                res.innerHTML +=  `  ${ini} <span>&#128073;`
            } 
        } res.innerHTML += `</span> &#127937;`
    } 
}

function foto() {
    extra.innerHTML = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.setAttribute('src', 'codigo exercicio parte 5.png')
    extra.appendChild(img)
    
}
