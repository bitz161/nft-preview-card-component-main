const view = document.querySelector("#viewable")
const img = document.querySelector("#imageNFT")

view.addEventListener('mouseover', function() {
    view.classList.remove('unview')
})

view.addEventListener('mouseleave', function() {
    view.classList.add('unview')
})