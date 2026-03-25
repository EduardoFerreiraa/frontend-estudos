function executar() {
    console.log("Clique no botão");
}

function executar2() {
    console.log("Clique no body");
}

// const botao = document.getElementById('botao');
const botao = document.querySelector('[botao-acao]');
const body = document.querySelector('body');

botao.addEventListener('click', executar);
body.addEventListener('click', executar2);

/* botao.addEventListener('click', function() {
    executar();
    executar2();
}); */