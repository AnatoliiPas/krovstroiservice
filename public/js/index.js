const footerDate = document.querySelector(".date")
footerDate.textContent = `${new Date().getFullYear()}г.`

const images = document.querySelectorAll(".imgslide")
images.forEach(i => {
    i.style.height = `${500}px`
    i.style.width = `${1000}px`
})

const logo = document.querySelector(".logo")
logo.style.width = `${80}px`
logo.style.height = `${55}px`