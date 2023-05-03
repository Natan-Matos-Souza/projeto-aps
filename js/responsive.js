const menuBtn = document.getElementById('responsive-menu')
const list = document.getElementById('list')
const liElement = document.getElementById('')
const header = document.getElementById('header')


menuBtn.addEventListener('click', function() {
    if (list.style.display == "none") {
        list.style.animation = 'dropdownEffect 1s'
        list.style.display = "block"
    } else {
        setTimeout(() => {
            list.style.display = "none"
        }, 950)
        list.style.animation= 'dropInEffect 1s'
    }
})


menuBtn.addEventListener('dblclick', function() {
    alert('Aperte apenas uma vez para realizar a animação !')
})

setInterval(() => {

    if (window.innerWidth > 995) {
        list.style.animation = 'none'
        list.style.display = "block"
    }
}, 100)
