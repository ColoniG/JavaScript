function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')  // FORMA MAIS ATUAL 
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO!!!] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radSex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //CRIANÇA
                img.setAttribute('src', 'criancamenino.png')
            } else if (idade < 18) {
                //ADOLESCENTE
                img.setAttribute('src', 'adolescentemenino.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'homem.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //CRIANÇA
                img.setAttribute('src', 'criancamenina.png')
            } else if (idade < 18) {
                //ADOLESCENTE
                img.setAttribute('src', 'adolescentemenina.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'mulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}