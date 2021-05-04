let numero = prompt('Digite o ano de nascimento');

let idade = 2021 - numero;
let restante;

if (idade < 18) {
    restante = 18 - idade;
    alert(`Faltam ${restante}`);
} else {
    restante = idade - 18;
    alert(`Ja se passaram ${restante}`);
}
