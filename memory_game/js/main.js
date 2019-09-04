var cards = [
    {
    	rank: "queen",
    	suit: "hearts",
    	cardImage: "images/queen-of-hearts.png"
    }, 
    {
    	rank: "queen",
    	suit: "diamonds",
    	cardImage: "images/queen-of-diamonds.png"
    }, 
    {
    	rank: "king",
    	suit: "hearts",
    	cardImage: "images/king-of-hearts.png"
    }, 
    {
    	rank: "king",
    	suit: "diamonds",
    	cardImage: "images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];

var score = 0;

document.getElementById("score").textContent = score;

function myScore () {
	score++;
	document.getElementById("score").textContent = score;
};

function checkForMatch () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
        myScore();        
    } else {
        alert("Sorry, try again.");
    };
};

function flipCard () {
	const cardId = this.getAttribute("data-id"); 
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute("src", cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
	    checkForMatch();
    };
};

function createBoard () {
	for (let i = 0; i < cards.length; i++) {
		const cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	};
};

document.getElementById("reset").addEventListener("click", reset);

function reset () {
	cardsInPlay = [];
	for (let i = 0; i < cards.length; i++) {
		document.getElementsByTagName('img')[i].setAttribute("src", "images/back.png");
	};
};

createBoard();