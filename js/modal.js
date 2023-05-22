const modalDiv = document.getElementById('modal')
const reuseBtn = document.getElementById('reuse-btn')
const closeModalBtn = document.getElementById('close-modal')


reuseBtn.addEventListener('click', () => {

    modalDiv.style.display = "block"

})

closeModalBtn.addEventListener('click', () => {

    modalDiv.style.display = "none"
})