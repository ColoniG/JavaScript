    //   RECURSIVIDADE

function fatorial(n) {
    if ( n == 1 || n == 0) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))


let n1 = 2//Number(num.value)
let vetor = []

if (vetor.indexOf(n1) != -1) {  // VALOR JÁ DIGITADO
    console.log('Número repitido!')
}

console.log(vetor.indexOf(n1))
