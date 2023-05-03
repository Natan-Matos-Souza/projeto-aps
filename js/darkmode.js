const darkmodeBtn = document.getElementById('dark-mode-icon')
const bodyElement = document.getElementById('body')

darkmodeBtn.addEventListener('click', function() {
    bodyElement.style.backgroundColor = '#393646'
})