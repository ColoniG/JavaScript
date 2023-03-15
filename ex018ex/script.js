let num = document.getElementById('num')
let tab = document.getElementById('tab')
let res = document.querySelector('div#res')
let vetor = []

function add() {
    res.innerHTML =''
    if (num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100 ) {
        window.alert('Valor inválido ou já encontrado na lista!')
    } else {
        let n1 = Number(num.value)
        if (vetor.indexOf(n1) != -1) {  // VALOR JÁ DIGITADO
            window.alert('Valor inválido ou já encontrado na lista!!')
        } else { 
            let item = document.createElement('option')
            item.text = `Valor ${n1} adicionado!`
            //tab.value = `tab${c}`  //  <<<<------- Muito usado em outras Linguagens
            tab.appendChild(item)  
            vetor.push(n1)
        }
    } 
    num.value = ''    //  <<<<<<----- para limpar a caixa antes do adicionar
    num.focus()     //  <<<<<<----- colocar o cursor lá
}
function fin() {
    if (vetor.length == 0) {    //num.value.length == 0
        window.alert('Adicione valores antes de finalizar!')        
    } else {
        let menor = vetor[0]
        let maior = vetor[0]
        let soma = 0
         
        for (let c = 0; c < vetor.length; c++) {
            if (menor > vetor[c]) {
                menor = vetor[c]
                
            } else if (maior < vetor[c]) {
                maior = vetor[c]
            }
            soma += vetor[c]
        }
        res.innerHTML = `<br>Ao todo temos ${vetor.length} números cadastrados. <br><br>
                        O maior valor informado foi  ${maior}. <br><br>
                        O menor valor informado foi  ${menor}. <br><br>
                        Somando todos os valores, temos ${soma}. <br><br>
                        A média dos valores digitados é ${soma/vetor.length}. <br><br>`
    }   
}
function foto() {
    extra.innerHTML =''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.setAttribute('src', 'print08.png')
    extra.appendChild(img)   
     
}