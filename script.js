// trocar a cor e icone do button toggle menu

const btnToggleMenu = document.querySelector(".btn-toggle").addEventListener("click", tradeBtn)

function tradeBtn(){
    let btn = this
    if(btn.classList.contains('fa-bars')){
        btn.classList.remove('fa-bars')
        btn.classList.add('fa-x')
    }else if(btn.classList.contains('fa-x')){
        btn.classList.add('fa-bars')
        btn.classList.remove('fa-x')
    }
}
// Função para verificar a largura da tela e trocar o src da imagem conforme necessário
function alterarSrcImagem() {
    const larguraDaTela = window.innerWidth; // Obtém a largura da tela
    const img = document.getElementById('profile-img'); // Obtém a referência para a imagem

    // Verifica se a largura da tela é menor que 1400px
    if (larguraDaTela < 1400) {
        img.src = 'assets/profile-2.png'; // Substitui o src da imagem pela nova imagem
    } else {
        img.src = 'assets/profile.png'; // Retorna ao src original se a largura da tela for maior ou igual a 1400px
    }
}

// Chama a função quando a página é carregada e quando a janela é redimensionada
window.onload = alterarSrcImagem;
window.onresize = alterarSrcImagem;
