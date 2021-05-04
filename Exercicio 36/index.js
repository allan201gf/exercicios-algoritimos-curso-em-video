let horasMes = prompt('Quantidade de horas exercitadas no mês');

let pontos;
let premio;

if (horasMes <= 10) {
    pontos = horasMes * 2;
} else if (horasMes > 10 && horasMes <= 20) {
    pontos = horasMes * 5;
} else if (horasMes > 20) {
    pontos = horasMes * 10;    
}

premio = pontos * 0.05;

alert(`Quantidade de pontos: ${pontos} - você ganhou R$ ${premio}`);