let peso = prompt('Digite seu peso');
let altura = prompt('Digite sua altura');

let imc = peso / (altura**2);

imc = imc.toFixed(2);

if (imc < 18.5) {
    alert(`IMC de ${imc} - Abaixo do peso`);
} else if (imc <= 25) {
    alert(`IMC de ${imc} - Peso ideal`);
}else if (imc <= 30) {
    alert(`IMC de ${imc} - Sobrepeso`);
}else if (imc <= 40) {
    alert(`IMC de ${imc} - Obesidade`);
}else if (imc > 40) {
    alert(`IMC de ${imc} - Obesidade mórbida`);
}