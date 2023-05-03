const bodyElement = document.getElementById('body')
    
if (localStorage.getItem('theme') == "dark") {
    bodyElement.setAttribute('class', "dark-body")
}

if (localStorage.getItem('theme') == "default") {
    bodyElement.setAttribute('class', "light-body")
}

if (localStorage.getItem('theme') == null || localStorage.getItem('theme') == "") {
    bodyElement.setAttribute('class', "light-body")
    localStorage.setItem('theme', 'default' )
}

const darkModeBtn = document.getElementById('dark-mode-icon')

darkModeBtn.addEventListener('click', function() {
    if (localStorage.getItem('theme') == "default") {
        bodyElement.setAttribute('class', "dark-body")
        localStorage.setItem('theme', "dark")
    } else {
        bodyElement.setAttribute('class', "light-body")
        localStorage.setItem('theme', "default")
    }
})