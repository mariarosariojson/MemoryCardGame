const cards = document.querySelectorAll(".card");

let flippedCard = false;
let firstFlippedCard, secondFlippedCard;

function pickCard() {
  this.classList.add("flip");

  if (!flippedCard) {
    flippedCard = true;
    firstFlippedCard = this;
  } else {
    flippedCard = false;
    secondFlippedCard = this;

    if (firstFlippedCard.dataset.game === secondFlippedCard.dataset.game) {
      firstFlippedCard.removeEventListener("click", pickCard);
      secondFlippedCard.removeEventListener("click", pickCard);
    } else {
      setTimeout(() => {
        firstFlippedCard.classList.remove("flip");
        secondFlippedCard.classList.remove("flip");
      }, 1000);
    }
  }
}

(function shuffleBoard() {
  cards.forEach((card) => {
    let randomize = Math.floor(Math.random() * 24);
    card.style.order = randomize;
  });
})();

cards.forEach((card) => card.addEventListener("click", pickCard));
