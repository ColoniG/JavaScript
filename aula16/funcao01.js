function parimpar(n) {
    if (n % 2 == 0) {
        return `O número ${n} é PAR!`
    } else {
        return `O número ${n} é IMPAR!`
    }
}

let res = parimpar(5)

console.log(res)

console.log(`Aqui chamei a função e não salvei em uma variavel!  --->>> `, parimpar(10))