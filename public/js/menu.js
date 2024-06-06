// Esta função é responsável por alternar a exibição do menu dropdown
function toggleMenu(x) {
    // Alterna a classe 'change' no ícone do menu para mudar sua aparência
    x.classList.toggle("change");
    
    // Seleciona o elemento que contém o conteúdo do dropdown
    const dropdown = document.querySelector('.dropdown-content');
    
    // Alterna a classe 'show' no dropdown para mostrar ou ocultar o conteúdo
    dropdown.classList.toggle('show');
    
    // Se o dropdown estiver sendo mostrado, define a altura máxima para exibir todo o conteúdo
    if (dropdown.classList.contains('show')) {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    } else {
        // Caso contrário, remove a altura máxima para ocultar o conteúdo
        dropdown.style.maxHeight = null;
    }
}