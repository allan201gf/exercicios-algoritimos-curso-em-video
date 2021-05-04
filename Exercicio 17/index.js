let velocidade = prompt('Qual a velocidade do carro? ');
let multa;

if (velocidade > 80){
    multa = (velocidade-80) * 5
    alert(`Multa de R$ ${multa}`);
} else {
    alert(`Dentro da velocidade permitida`);
}
