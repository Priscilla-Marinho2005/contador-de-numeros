const botaoMais = document.getElementById("botaoMais");
const botaoMenos = document.getElementById("botaoMenos")
const contador = document.getElementById("contador");

let valor = 0;

function atualizarContador() {
    contador.textContent = valor;
    contador.style.color = valor < 0 ? "red" : "#A979D9";
}

botaoMais.addEventListener("click", () => {
    valor++;
    atualizarContador();
}); 

botaoMenos.addEventListener("click", () => {
    valor--;
    atualizarContador();
})
