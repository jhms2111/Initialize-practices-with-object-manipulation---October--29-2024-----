const frutas = [];


//adicionar frutas
const addFrutas = frutas.push('maca', 'banana','laranja');


//eliminar o ultimo elemento 
let ultimaFrutaRemovida = frutas.pop()


frutas.unshift('manga')

let primeiraFruta = frutas.shift()




console.log("Todas as frutas",frutas)
console.log("Fruta removida:",ultimaFrutaRemovida)
console.log("Primeira fruta removida:",primeiraFruta)