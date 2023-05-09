const htmlElement = document.querySelector('html')
const darkModeBtn = document.getElementById('dark-mode-icon')

if (localStorage.getItem('theme') == "dark") {
    htmlElement.setAttribute('class', 'dark-mode')
    darkModeBtn.innerHTML = "light_mode"
}

if (localStorage.getItem('theme') == "default") {
    htmlElement.setAttribute('class', 'light-mode')
    darkModeBtn.innerHTML = "dark_mode"
}

if (localStorage.getItem('theme') == "" || localStorage.getItem('theme') == null) {
    htmlElement.setAttribute('class', 'light-mode')
    localStorage.setItem('theme', 'default')
}

darkModeBtn.addEventListener('click', () => {
    if (htmlElement.getAttribute('class') == "light-mode") {
        htmlElement.setAttribute('class', 'dark-mode')
        localStorage.setItem('theme', 'dark')
        darkModeBtn.innerHTML = "light_mode"
    } else {
        htmlElement.setAttribute('class', 'light-mode')
        localStorage.setItem('theme', 'default')
        darkModeBtn.innerHTML = "dark_mode"
    }
})