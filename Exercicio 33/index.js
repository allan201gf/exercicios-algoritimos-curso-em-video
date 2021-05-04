let salario = prompt('Digite seu salário');
let valorCasa = prompt('Digite o valar da casa que deseja financiar');
let anosFin = prompt('Em quantos anos você quer financiar?');

let mesesPag = anosFin * 12;

let valorParcela = valorCasa / mesesPag;

valorParcela = valorParcela.toFixed(2);

if (valorParcela <= salario * 0.3) {
    alert (`Emprestimo aprovado, parcela de R$ ${valorParcela}`);
} else {
    alert (`Emprestimo reprovado, parcela de R$ ${valorParcela}`)
}
