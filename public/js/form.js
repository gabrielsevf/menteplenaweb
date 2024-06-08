// Seleciona o formulário de login e o formulário de cadastro
var formEntrar = document.querySelector('#Entrar');
var formCadastrar = document.querySelector('#Cadastrar');

// Seleciona o botão de cor, o botão de entrar e o botão de cadastrar
var btn_cor = document.querySelector('.btn_cor');
var btn_entrar = document.querySelector('#btn_entrar');
var btn_cadastrar = document.querySelector('#btn_cadastrar');

// Adiciona um evento de clique ao botão "Entrar"
document.querySelector('#btn_entrar').addEventListener('click', () => {
    // Move o formulário de login para a esquerda
    formEntrar.style.left = "25px";
    // Move o formulário de cadastro para a direita
    formCadastrar.style.left = "450px";
    // Move o botão de cor para a esquerda
    btn_cor.style.left = "0px";
    // Altera a cor do texto do botão "Entrar" para branco
    btn_entrar.style.color = "#fff";
    // Altera a cor do texto do botão "Cadastrar" para preto
    btn_cadastrar.style.color = "#000";
})

// Adiciona um evento de clique ao botão "Cadastrar"
document.querySelector('#btn_cadastrar').addEventListener('click', () => {
    // Move o formulário de login para a esquerda
    formEntrar.style.left = "-450px";
    // Move o formulário de cadastro para a direita
    formCadastrar.style.left = "25px";
    // Move o botão de cor para a direita
    btn_cor.style.left = "110px";
    // Altera a cor do texto do botão "Cadastrar" para branco
    btn_cadastrar.style.color = "#fff";
    // Altera a cor do texto do botão "Entrar" para preto
    btn_entrar.style.color = "#000";
})