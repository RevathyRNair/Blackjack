
let player = {
    name: "Revathy",
    coins: 150
}

let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackjack = false;
let message = "";
let coinsCollected = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");   //same as above. If class, use . instead of #
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.coins;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        randomNumber = 11;
    }
    if (randomNumber > 10) {
        randomNumber = 10;
    }
    return randomNumber;
}
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for (let i = 0; i<cards.length; i++) {
            cardsEl.textContent += cards[i] + " ";
     }
    if (sum < 21) {
        message = "Do you want to draw another card?";
    }
    else if (sum === 21) {
        message = "You've got a blackjack!";
        hasBlackjack = true;
        player.coins += 5;
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
        player.coins -= 5;
    }
    messageEl.textContent = message;
    playerEl.textContent = player.name + ": $" + player.coins;
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackjack === false) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }

}


