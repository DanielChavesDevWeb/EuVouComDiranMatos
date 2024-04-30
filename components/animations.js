//animações do site intersectionObserver eixoX

const allSection = document.querySelectorAll(".hiddenX")

const observeSection = new IntersectionObserver((sections) => {
    sections.forEach((section) => {
        if(section.isIntersecting){
            section.target.classList.add("showX")
        }else{
            section.target.classList.remove("showX")
        }
    })
})

allSection.forEach((element) => observeSection.observe(element))

//animações do site intersectionObserver eixoY

const allItens = document.querySelectorAll(".hiddenY")

const observeItens = new IntersectionObserver((allItens) => {
    allItens.forEach((item) => {
        if(item.isIntersecting){
            item.target.classList.add("showY")
        }else{
            item.target.classList.remove("showY")
        }
    })
})

allItens.forEach((item) => observeItens.observe(item))