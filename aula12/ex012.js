var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()

console.log(`A hora exata é ${hora}:${minuto}.`)
if (hora < 12 && hora >= 6) {
    console.log('Bom dia!')
} else if (hora < 18 && hora >= 12) {
    console.log('Boa tarde!')
} else if (hora < 24 && hora >= 18) {
    console.log('Boa noite!')
}else {
    console.log('Boa madrugada!')
}