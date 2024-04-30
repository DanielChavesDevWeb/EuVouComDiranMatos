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

// configurando mensagem personalizada

let btnMsg = document.querySelector("#btn-mensage").addEventListener("click", sendMsg)

function sendMsg(){
    let assunto = document.querySelector("#assunto").value;
    let msg = document.querySelector("#mensagem").value;

    if(assunto.length === 0 || msg.length === 0){
        alert("ERRO! Preencha o formulário.");
    } else {
        // Construir o link do WhatsApp com o número de telefone, assunto e mensagem
        let numeroTelefone = "557399354445"; // Substitua pelo número de telefone desejado
        let mensagemEncoded = encodeURIComponent(`*Assunto:* ${assunto}\n\n *Mensagem* ${msg}`); // Codifica a mensagem para ser incluída na URL
        let linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemEncoded}`;

        // Redirecionar o usuário para o WhatsApp com a mensagem pré-preenchida
        window.open(linkWhatsApp, '_blank');
    }
}
