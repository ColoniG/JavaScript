function fatorial(n) {
    let res = n
    let texto = `${n}! = ${n}`
    if (n < 1 || Number.isInteger(n) != true ) {
        if ( n == 0) {
           return '0! = 1' 
        } else { return 'Atenção!! Apenas numeros naturais.'}
        
    } else {
        for (let c=n-1; c>0; c--) {
                res *= c 
                texto += ` x ${c}`
        } 
    return texto += ` = ${res} `
    }
}

console.log(fatorial(9/2))

