let a = prompt('Valor do primeiro lado');
let b = prompt('Valor do segundo lado');
let c = prompt('Valor do terceiro lado');

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

if ( a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        alert(`O triangulo é EQUILATERO`);
    } else if (a === b || a === c || b === c) {
        alert(`O triangulo é ISÓSCELES`);
    } else {
        alert(`O triangulo é ESCALENO`);
    }
} else {
    alert(`não é possível fazer um triangulo`);
}
