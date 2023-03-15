//++++++++++++++++++ Funções Anônimas +++++++++++++++++++++++++++++++

(function () {
    console.log("Criar uma função e executá-la imediatamente após a declaração")
})()

////////////////////////////////////////////////////////

let mostrar = function () {
    console.log('Função Anônima')
}
mostrar()

/////////////////////////////////////////////////////////

setTimeout( function() {
    console.log('Executa depois de 2 segundos!')
}, 2000)

/////////////////////////////////////////////////////////

let show = ()=> console.log('Função Aônima com arrow')

show()

//////////////////////////////////////////////////////////

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));

