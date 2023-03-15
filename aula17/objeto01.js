let amigo = {
    nome:'José', 
    sexo:'M', 
    peso: 67.5,
    engordar(p=0){
        console.log('Engordou!')
        this.peso += p
}}
/*
console.log(typeof(amigo))
console.log(amigo)
console.log(amigo.nome)
amigo.engordar(10)
console.log(amigo.peso)

console.log(typeof(amigo.peso))
*/
let primo = {
        nome:'Carlos Eduardo Oliveira', 
        sexo:'masculino', 
        peso: 87.5,
        engordar(p=0){
            console.log('Engordou!')
            this.peso += p },  
        filho: 
            juliaa = {
                nome:'Julia Oliveira', 
                sexo:'feminino', 
                peso: 65,
                engordar2(p=0){
                    console.log('Engordou!')
                    this.peso += p },  
                neto:   
                    luana = {
                        nome:'Luana Oliveira', 
                        sexo:'feminino', 
                        peso: 22,
                        engordar3(p=0){
                            console.log('Engordou!')
                            this.peso += p }
                            }
                    }
            }

//console.log(primo)
//juliaa.emagrece(2)
//console.log(juliaa)

/*
console.log(primo.filho.neto.nome)
console.log('')
console.log(primo.filho.neto.peso)
primo.filho.neto.engordar3(-1)
console.log('')
console.log(primo.filho.neto.peso)
*/

let dadosPes = `Olá, segue dados do senhor ${primo.nome} do sexo ${primo.sexo}, hoje pesando em torno de ${primo.peso}. Sua filha ${primo.filho.nome} do 
                sexo ${primo.filho.sexo} com o peso de ${primo.filho.peso}, é mãe dedicada de ${primo.filho.neto.nome} que também é do sexo 
                ${primo.filho.neto.sexo} pesa ${primo.filho.neto.peso}, por ser neta de ${primo.nome} herdará sua fortuna!`

console.log(dadosPes)