const bars = document.querySelector('.hamburger')
const closed = document.querySelector('.close')

bars.addEventListener('click', function (event) {
    const menu = document.querySelector('.header-nav')
    const cross = document.querySelector('.close')
    menu.style.display = "block"
    cross.style.display = "block"
})

closed.addEventListener('click', function (event) {
    const menu = document.querySelector('.header-nav')
    menu.style.display = ""
})