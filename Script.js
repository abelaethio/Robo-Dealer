// Define the Card object
function Card(value, suit) {
  this.value = value;
  this.suit = suit;
}

// Create an array of all unique cards in a deck
const deck = [];
const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

for (const suit of suits) {
  for (const value of values) {
    deck.push(new Card(value, suit));
  }
}

// Function to randomly select 5 cards from the deck
function drawHand() {
  const hand = [];
  const drawnIndexes = new Set();

  while (hand.length < 5) {
    const randomIndex = Math.floor(Math.random() * 52);
    if (!drawnIndexes.has(randomIndex)) {
      drawnIndexes.add(randomIndex);
      hand.push(deck[randomIndex]);
    }
  }

  return hand;
}

// Function to display the hand on the HTML page
function displayHand(hand) {
  const handDiv = document.getElementById('hand');
  handDiv.innerHTML = '';

  for (const card of hand) {
    const cardText = document.createElement('p');
    cardText.textContent = `${card.value} of ${card.suit}`;
    handDiv.appendChild(cardText);
  }
}

// Function to deal a new hand and display it
function dealHand() {
  const hand = drawHand();
  displayHand(hand);
}

// Initial display of a hand when the page loads
dealHand();
