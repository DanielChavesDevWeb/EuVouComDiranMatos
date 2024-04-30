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