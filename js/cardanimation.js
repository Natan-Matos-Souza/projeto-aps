function cardAnimation(card) {
    card.style.animation = 'earthAnimation 2s infinite'
}

function stopAnimation(card) {
    card.style.animation = 'none'
}


const firstLeftCardDiv = document.getElementById('first-left-card')
const firstLeftCardImg = document.getElementById('first-left-card-img')
const firstRightCardDiv = document.getElementById('first-right-card')
const firstRightCardImg = document.getElementById('first-right-card-img')
const secondLeftCardDiv = document.getElementById('second-left-card')
const secondLeftCardImg = document.getElementById('second-left-card-img')


firstLeftCardDiv.addEventListener('mouseover', () => {
    cardAnimation(firstLeftCardImg)
})

firstLeftCardDiv.addEventListener('mouseout', () => {
    stopAnimation(firstLeftCardImg)
})


firstRightCardDiv.addEventListener('mouseover', () => {
    cardAnimation(firstRightCardImg)
})

firstRightCardDiv.addEventListener('mouseout', () => {
    stopAnimation(firstRightCardImg)
})

secondLeftCardDiv.addEventListener('mouseover', () => {
    cardAnimation(secondLeftCardImg)
})

secondLeftCardDiv.addEventListener('mouseout', () => {
    stopAnimation(secondLeftCardImg)
})

