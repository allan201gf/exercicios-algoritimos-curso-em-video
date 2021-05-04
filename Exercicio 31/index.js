let nome = prompt('Digite seu nome');
let jogador = prompt('Digite pedra, papel ou tesoura');
let computador = Math.round(Math.random() * (3 - 1) + 1);

if (computador === 1) {
    computador = 'pedra';
} else if (computador === 2) {
    computador = 'papel';
} else {
    computador = 'tesoura';
}

alert (`O computador jogou ${computador}`)

if (jogador === 'pedra'){
    if (computador === 'pedra'){
        alert ('Empate');
    } else if (computador === 'papel'){
        alert (`Computador ganhou!`);
    } else {
        alert (`${nome} ganhou!`);
    }
} else if (jogador === 'papel'){
    if (computador === 'pedra'){
        alert (`${nome} ganhou!`);
    } else if (computador === 'papel'){
        alert (`Empate`);
    } else {
        alert (`Computador ganhou!`);
    }
} else if (jogador === 'tesoura'){
    if (computador === 'pedra'){
        alert (`Computador ganhou!`);
    } else if (computador === 'papel'){
        alert (`${nome} ganhou!`);
    } else {
        alert (`Empate`);
    }
} else {
    alert ('Jogada Inválida');
}



