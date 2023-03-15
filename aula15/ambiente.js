let num = [3,9,'B',1, 'eua']
num[6] = 'sim'
num.push(99)   //  coloca valor na última posição
num.length  // saber o tamanho OBS: sem parenteses

console.log(`Nosso vetor é: ${num}`, num.length)
console.log(``)

num = []
num = [0,6,4,3,1,9]

num.sort()  //  coloca de forma cescente

console.log(`Nosso vetor é: ${num}`)
console.log(``)

for (let c=0; c<num.length; c++) {
    console.log(`A posição ${c} do arrei "num" é ${num[c]}`)
} 
console.log(``)

for (let c in num) {
    console.log(`A posição ${c} tem ${num[c]}`)
}
console.log(``)

num.indexOf(6)  //  para buscar valores dentro do vetor

console.log(num.indexOf(12))
console.log(``)