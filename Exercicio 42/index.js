let numero = prompt('Digite o numero para a contagem');
const p = document.querySelector('.num');


for (let i = 0; i <= numero; i++) {
    p.innerHTML += `<p>${i}</p>`;
}
p.innerHTML += `<p>Acabou!</p>`;