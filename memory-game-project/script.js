const cards = document.querySelectorAll('.card');
let replayButton = document.getElementById("replay-button");

let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');

    if(!flippedCard) {
        flippedCard = true;
        firstCard = this;

        return;
    }

    
    secondCard = this;

    matchCards();

}

function matchCards() {
    let isMatch = firstCard.dataset.item === secondCard.dataset.item;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}


function resetBoard() {
    flippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

function replayGame() {
    cards.forEach(card => {
      card.classList.remove('flip');
      card.addEventListener('click', flipCard);
    });
  
    resetBoard();
    shuffle();
  }
  
  function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * cards.length);
      card.style.order = randomPos;
    });
  }
  
  shuffle();

// (function shuffleImages() {
//     cards.forEach(card => {
//         let random = Math.floor(Math.random() * cards.length);
//         card.style.order = random;
//     });
// })();


cards.forEach(card => card.addEventListener('click', flipCard));
replayButton.addEventListener("click", replayGame);



// function replayGame() {
//     replayButton.style.display = "block";
//     var cards = document.querySelectorAll(".card");
//     for (var i = 0; i < cards.length; i++) {
//         cards[i].classList.remove("flip");
//         cards[i].style.transform = "rotateY(0deg)";
//     }
// }




















