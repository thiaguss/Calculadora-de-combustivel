const precoCombustivel = 7;
const kmPorLitros = 12;
const distanciaKm = 95.7;

const litrosConsumidos = distanciaKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(` O valor gasto sera de: ${valorGasto.toFixed(2)}`)