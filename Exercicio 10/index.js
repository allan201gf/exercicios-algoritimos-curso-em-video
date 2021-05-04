let altura = prompt('Digite a altura');
let largura = prompt('Digite a largura');

altura = parseFloat(altura);
largura = parseFloat(largura);

let area = altura * largura;

alert(`Área: ${area}, é necessário ${area/2} litros de tinta para pinta-la.`);