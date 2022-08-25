document.addEventListener('DOMContentLoaded',() => {
//card options
    const cardArray = [
            {
            name: 'bookcase',
            img: 'image/bookcase.jpg'
        },
        {
            name: 'bookcase',
            img: 'image/bookcase.jpg'
        },
        {
            name: 'outside',
            img: 'image/outside.jpg'
        },
        {
            name: 'outside',
            img: 'image/outside.jpg'
        },
     
        {
            name: 'river',
            img: 'image/river.jpg'
        },
        {
            name: 'river',
            img: 'image/river.jpg'
        },
        {
            name: 'stairs',
            img: 'image/stairs.jpg'
        },
        {
            name: 'stairs',
            img: 'image/stairs.jpg'
        },
        {
            name: 'traditional',
            img: 'image/traditional.jpg'
        },
        {
            name: 'traditional',
            img: 'image/traditional.jpg'
        },
    ]
})
cardArray.sort (() =>0.5-Math.random())
const grid = document.querySelector('.grid')
const resultDisplay = document,querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//creating your board
function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement ('img')
        card.setAttribute ('src', 'images/angie.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild (card)
    }
}

// check for match
function checkForMatch(){
    var cards = document.querySelectorAll ('img')
    const optionOneId = cardsChosenId [0]
    const optionTwoId = cardsChosenId [1]
    if (cardsChosen [0] === cardsChosen [1]) {
        alert ('you found a match')}
        cards[optionOneId].setAttribute('src', 'images/angie.jpg')
        cards[optionTwoId].setAttribute('src', 'images/angie.jpg')
        cardsWon.push(cardsChosen)
} else{
    cards[optionOneId].setAttribute('src', 'images/philip.jpg')
    cards[optionTwoId].setAttribute('src', 'images/philip.jpg')
    alert('nope, try again')
}
cardsChosen[];
cardsChosenId[];
resultDisplay,textContent - cardsWon.length
if (cardsWon.length === cardArray.length/2)
resultDisplay.textContent = "congrats you won"

// flip card
function flipCard(){
    var cardId = this.getAttribute ('data-id')
    cardsChosen.push (cardArray[cardId].name)
    cardsChosenId.push (cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}
createBoard()