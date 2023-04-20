const robotron = document.querySelector("#robotron");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const controles = document.querySelectorAll("[data-controle]");
var cores = document.querySelector('.cores');
var botaoCor = document.querySelector('.botao-cor');
const pecas = 
{
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

cores.addEventListener("change", (evento) =>{
    robotron.src = "img/" + (evento.target.value) + ".png";
} ); 

controles.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const operacao = evento.target.dataset.controle;
        const controles =  evento.target.parentNode;
        const contador = controles.querySelector("[data-contador]");
        const nomePeca = evento.target.dataset.peca;
        
        atualizaPainelControle(operacao, contador);
        atualizaPainelEstatisticas(operacao, nomePeca);
    })
});

function atualizaPainelControle(operacao, contador) {
    if (operacao === "-") {
        contador.value = parseInt(contador.value) - 1;
    }
    else {
        contador.value = parseInt(contador.value) + 1;
    }
}

function atualizaPainelEstatisticas(operacao, nomePeca) {
    estatisticas.forEach((elemento) => {
        if (operacao === "-") {
            elemento.textContent= parseInt(elemento.textContent) - pecas[nomePeca][elemento.dataset.estatistica];
        }
        else {
            elemento.textContent= parseInt(elemento.textContent) + pecas[nomePeca][elemento.dataset.estatistica];
        }        
    });
}