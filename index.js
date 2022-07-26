let player = {
    name: "Pawl",
    chips: 200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let newCardEl = document.querySelector("#newcard-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ":" + " $" + player.chips;

// generate random number
function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum === 1) {
        return 11;
    } else if (randomNum <= 13 && randomNum >= 11) {
        return 10;
    } else {
        return randomNum;
    }
}
//start game
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
// render game 
function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got BlackJack!";
        hasBlackJack = true;
        player.chips += 50;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

// draw new Card function
function newCard() {
    if ((isAlive === true && hasBlackJack === false)) {
        let card = getRandomCard();
        // cardsEl.textContent += cards[2];
        sum += card;
        cards.push(card);
        renderGame();
    } else if (hasBlackJack === true) {

        alert("You won some cash!!")

    }
    else {
        alert("You Have to start the game first!!");
    }
}