function calcular(){
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let mult = Number(num.value)
        tab.innerHTML = ''    //  Para limpar
        for (let c=1; c<=10; c++) {
            let item = document.createElement('option')
            item.text = `${mult} x ${c} = ${mult*c}`
            tab.value = `tab${c}`        //  <<<<------- Muito usado em outras Linguagens
            tab.appendChild(item)                     // como PHP
        }
    }
}