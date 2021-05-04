let a = prompt('Nota numero 1');
let b = prompt('Nota número 2');

a = parseFloat(a);
b = parseFloat(b);

let media = (a+b)/2;

if ( media <= 4.9 ) {
    alert(`${media} Reprovado`);
} else if ( media >= 7 ) {
    alert(`${media} Aprovado`);
} else {
    alert(`${media} Recuperação`);
}
