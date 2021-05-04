let genero = prompt('m - mulher / h - homem');
let salario = prompt('Salario');
let anos = prompt('Anos de empresa');

let reajuste = 0;
let salarioFinal;
let teste;

salario = parseFloat(salario);
anos = parseFloat(anos);

if (genero = 'm') {
    if (anos < 15) {
        reajuste = salario * 0.05;
    } else if (anos >= 15 && anos <= 20) {
        reajuste = salario * 0.12;
    } else if (anos > 20) {
        reajuste = salario * 0.23;
    }
} else if (genero = 'h') {
    if (anos > 20) {
        reajuste = salario * 0.03;
    } else if (anos >= 20 && anos <= 30) {
        reajuste = salario * 0.13;
    } else if (anos > 30) {
        reajuste = salario * 0.25;
    }
}

salarioFinal = reajuste + salario;

salarioFinal = salarioFinal.toFixed(2)

alert(`Seu novo salário é de R$ ${salarioFinal}`)