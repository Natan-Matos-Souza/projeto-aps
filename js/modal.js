const reuseBtn = document.getElementById('reuse-btn')
const reuseDiv = document.getElementById('reuse-div')
const closeReuseDivBtn = document.getElementById('close-reuse-div-btn')

reuseBtn.addEventListener('click', () => {
    reuseDiv.style.display = "block"
})

closeReuseDivBtn.addEventListener('click', () => {
    reuseDiv.style.display = "none"
})