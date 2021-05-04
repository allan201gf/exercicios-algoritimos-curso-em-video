let a = prompt('Largura');
let b = prompt('Comprimento');

a = parseFloat(a);
b = parseFloat(b);

let area = a * b;

if ( area < 100 ) {
    alert(`${area} - Terreno Popular `);
} else if ( area > 500 ) {
    alert(`${area} - Terreno Master`);
} else {
    alert(`${area} - Terreno VIP`);
}
