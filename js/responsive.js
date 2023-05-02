const menuBtn = document.getElementById('responsive-menu')
const list = document.getElementById('list')
const liElement = document.getElementById('')
const header = document.getElementById('header')


menuBtn.addEventListener('click', function() {
    if (list.style.display == "none") {
        list.style.display = "block"
    } else {
        list.style.display = "none"
    }
})


setInterval(() => {

    if (window.innerWidth > 995) {
        list.style.display = "block"
    }
}, 100)
