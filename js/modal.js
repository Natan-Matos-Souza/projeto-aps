const modalDiv = document.getElementById('modal')
const closeModalBtn = document.getElementsByClassName('close-modal-btn')

//importing buttons

const reuseBtn = document.getElementById('reuse-btn')
const recicleBtn = document.getElementById('recicle-btn')

//Importing divs

const recicleDiv = document.getElementById('recicle-div')
const reuseDiv = document.getElementById('reuse-div')


reuseBtn.addEventListener('click', () => {
    modalDiv.style.display = 'block'
    reuseDiv.style.display = 'block'
})

recicleBtn.addEventListener('click', () => {
    modalDiv.style.display = 'block'
    recicleDiv.style.display = 'block'
})

function closeModal() {
    modalDiv.style.display = 'none'
    recicleDiv.style.display = 'none'
    reuseDiv.style.display = 'none'
}

closeModalBtn[0].addEventListener('click', closeModal)
closeModalBtn[1].addEventListener('click', closeModal)
closeModalBtn[2].addEventListener('click', closeModal)

console.log(closeModalBtn.length)