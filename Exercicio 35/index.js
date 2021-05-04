let tipoCarro = prompt('p - Carros Populares ou l - carros de Luxo');
let diarias = prompt('Número de diárias');
let km = prompt('Quilometragem percorrida');

let valorAluguel;
let valorKm;
let plano;
let total;

diarias = parseFloat(diarias);
km = parseFloat(km);

if (tipoCarro = 'p'){
    valorAluguel = 90 * diarias;
    plano = 'Popular';
    if (km <= 100) {
        valorKm = km * 0.2;
    } else if (km > 100) {
        valorKm = km * 0.1;
    }
} else if (tipoCarro = 'l'){
    valorAluguel = 150 * diarias;
    plano = 'de Luxo';
    if (km <= 100) {
        valorKm = km * 0.3;
    } else if (km > 100) {
        valorKm = km * 0.25;
    }
}

total = valorKm + valorAluguel;

alert(`Plano selecionado: ${plano}, valor total R$ ${total}`);