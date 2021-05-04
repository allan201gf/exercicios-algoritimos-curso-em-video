let distancia = prompt('Qual a distância da viagem?');

if (distancia <= 200) {
    valor = distancia * 0.5;
    alert(`Menos de 201km, o valor total é de R$ ${valor}`);
} else {
    valor = valor * 0.45;
    alert(`mais de 201km, o valor total é de R$ ${valor}`);
}
