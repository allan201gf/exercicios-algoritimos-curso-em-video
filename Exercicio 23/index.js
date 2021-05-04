let sexo = prompt('Digite o sexo (m - Masculino / f - Feminino)');
let valor = prompt('Digite o valor da compra');

if (sexo === "m") {
    valor = valor * 0.95;
    alert(`Valor com 5% de desconto - R$ ${valor}`);
} else {
    valor = valor * 0.87;
    alert(`Valor com 13% de desconto - R$ ${valor}`);
}
