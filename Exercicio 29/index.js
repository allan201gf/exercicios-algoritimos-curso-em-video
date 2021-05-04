let nome = prompt('Digite seu nome');
let anos = prompt('Quantos anos você trabalha na firma');
let salario = prompt('Qual seu salário atual');

salario = parseFloat(salario);
anos = parseFloat(anos);


if ( anos <= 3 ) {
    salario = salario * 1.03;
    alert(`${nome}, você trabalhou por ${anos}, seu novo salário é de R$ ${salario}`);
} else if ( salario >= 10 ) {
    salario = salario * 1.2;
    alert(`${nome}, você trabalhou por ${anos}, seu novo salário é de R$ ${salario}`);
} else {
    salario = salario * 1.125;
    alert(`${nome}, você trabalhou por ${anos}, seu novo salário é de R$ ${salario}`);
}
