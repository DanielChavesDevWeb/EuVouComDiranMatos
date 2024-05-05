
// trocar a cor e icone do button toggle menu

const btnToggleMenu = document.querySelector(".btn-toggle").addEventListener("click", tradeBtn)

function tradeBtn() {
    let btn = this
    if (btn.classList.contains('fa-bars')) {
        btn.classList.remove('fa-bars')
        btn.classList.add('fa-x')
    } else if (btn.classList.contains('fa-x')) {
        btn.classList.add('fa-bars')
        btn.classList.remove('fa-x')
    }
}
//animações do site intersectionObserver eixoX

const allSection = document.querySelectorAll(".hiddenX")

const observeSection = new IntersectionObserver((sections) => {
    sections.forEach((section) => {
        if (section.isIntersecting) {
            section.target.classList.add("showX")
        }
    })
})

allSection.forEach((element) => observeSection.observe(element))

//animações do site intersectionObserver eixoY

const allItens = document.querySelectorAll(".hiddenY")

const observeItens = new IntersectionObserver((allItens) => {
    allItens.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add("showY")
        }
    })
})

allItens.forEach((item) => observeItens.observe(item))
// configurando mensagem personalizada

let btnMsg = document.querySelector("#btn-mensage").addEventListener("click", sendMsg)

function sendMsg() {
    let assunto = document.querySelector("#assunto").value;
    let msg = document.querySelector("#mensagem").value;

    if (assunto.length === 0 || msg.length === 0) {
        alert("ERRO! Preencha o formulário.");
    } else {
        // Construir o link do WhatsApp com o número de telefone, assunto e mensagem
        let numeroTelefone = "557399354445"; // Substitua pelo número de telefone desejado
        let mensagemEncoded = encodeURIComponent(`*Assunto:* ${assunto}\n\n*Mensagem:* ${msg}`, '_blank'); // Codifica a mensagem para ser incluída na URL
        let linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemEncoded}`;

        // Redirecionar o usuário para o WhatsApp com a mensagem pré-preenchida
        window.open(linkWhatsApp);
    }
}

// configurando modal de projetos e botões

import Projects from "./components/Projects.js"

const closeProject = document.querySelector("#closeProject").addEventListener("click", exitProject)
const aboutProject = document.querySelector("#aboutProject")
const moreProjects = document.querySelectorAll(".btn-project")
const btnOptionProject = document.querySelector("#opinarProjeto").addEventListener("click", optionProject)

moreProjects.forEach((element, index) => {
    element.addEventListener("click", () => {
        showProject(index)
    })
})

function showProject(index) {
    aboutProject.classList.remove("hiddenProjects")
    aboutProject.classList.add("showProjects")

    validateAndShow(Projects[index])
}

function validateAndShow(project) {
    let title = document.querySelector("#aboutTitleProject")
    let img = document.querySelector("#imgAboutProject")
    let text1 = document.querySelector("#text1AboutProject")
    let text2 = document.querySelector("#text2AboutProject")
    let video = document.querySelector("#videoAboutProject")
    title.innerHTML = `${project.titulo}`
    img.src = `${project.img}`
    text1.innerHTML = `${project.text1}`
    text2.innerHTML = `${project.text2}`
    video.src = `${project.video}`
}



function optionProject() {
    let assunt = document.querySelector("#aboutTitleProject").textContent
    let phoneNumber = "557399354445";
    let msg = encodeURIComponent(`*Olá pré-candidato gostaria de opinar no projeto:* ${assunt}`, '_blank'); // Codifica a mensagem para ser incluída na URL
    let openApp = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${msg}`;

    // Redirecionar o usuário para o WhatsApp com a mensagem pré-preenchida
    window.open(openApp);
}

function exitProject() {
    aboutProject.classList.add("hiddenProjects")
    aboutProject.classList.remove("showProjects")
}

