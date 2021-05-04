let a = prompt('Valor do primeiro lado');
let b = prompt('Valor do segundo lado');
let c = prompt('Valor do terceiro lado');


if ( a + b > c && a + c > b && b + c > a) {
    alert(`é possível fazer um triangulo`);
} else {
    alert(`não é possível fazer um triangulo`);
}
