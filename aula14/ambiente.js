let vetor = [1,5,8,'a']
vetor[5] = 'Brasil'
console.log(vetor)


for (var c=1; c<=10; c++){               //  for (Inicialização; Teste Lógico; Incremento)   ====>>> ESTRUTURA DE REPETIÇÃO COM VARIAVEL DE CONTROLE
    console.log(`Passo n° ${c}.`)
}
console.log(`Agora c vale ${c}.`)


var ini = 5
var fim  = 12
var pas = 2

for (ini; ini<=fim; ini=ini+pas){               
    console.log(`Passo n° ${ini}.`)
}
