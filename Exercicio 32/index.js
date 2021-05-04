let numero = prompt('Digite um número de 1 a 5');
let computador = Math.round(Math.random() * (5 - 1) + 1);

numero = parseFloat(numero);

if (numero === computador){
    alert('Acertou');
} else {
    alert(`Errou, o número era ${computador}`);
}

