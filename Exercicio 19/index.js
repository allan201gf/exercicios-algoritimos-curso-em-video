let nome = prompt('Digite o ano do aluno');
let nota1 = prompt('Digite a nota 1');
let nota2 = prompt('Digite a nota 2');

let media = (nota1 + nota2) / 2;

if (media >= 7) {
    alert(`o ${nome} teve um bom aproveitamento`);
} else {
    alert(`o ${nome} não teve um bom aproveitamento`);
}
