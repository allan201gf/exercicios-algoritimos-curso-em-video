let num1 = prompt('Digite a primeira nota');
let num2 = prompt('Digite a segunda nota');
let total;

num1 = parseFloat(num1);
num2 = parseFloat(num2);

total = (num1 + num2)/2;

alert(`A média das notas é ${total}`);