
let words = [
  "table", "apple", "grape", "plant", "chair",
  "bread", "house", "water", "smile", "train",
  "brain", "light", "stone", "cloud", "music",
  "piano", "world", "green", "beach", "dream",
  "flame", "crane", "pride", "heart", "lemon"
];

let targetWord = "";
let attempts = 0;
let maxAttempts = 6;

let board = document.getElementById("board");
let guessInput = document.getElementById("guessInput");
let submitBtn = document.getElementById("submitBtn");
let message = document.getElementById("message");

function getRandomWord() {
  let index = Math.floor(Math.random() * words.length);
  return words[index];
}

function createBoard() {
  for (let i = 0; i < 30; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
  }
}

function checkGuess() {
  let guess = guessInput.value.toLowerCase().trim();

  if (guess.length !== 5) {
    message.textContent = "Please enter exactly 5 letters.";
    return;
  }

  if (attempts >= maxAttempts) {
    return;
  }

  let start = attempts * 5;

  for (let i = 0; i < 5; i++) {
    let cell = board.children[start + i];
    cell.textContent = guess[i];

    if (guess[i] === targetWord[i]) {
      cell.classList.add("correct");
    }

    else if (targetWord.includes(guess[i])) {
      cell.classList.add("present");
    }

    else {
      cell.classList.add("absent");
    }
  }

  attempts++;

  if (guess === targetWord) {
    message.textContent = "Congratulations! You guessed the word!";
    guessInput.disabled = true;
    submitBtn.disabled = true;
  }

  else if (attempts === maxAttempts) {
    message.textContent = 'Game over, the word was "' + targetWord + '"';
    guessInput.disabled = true;
    submitBtn.disabled = true;
  }

  else {
    message.textContent = "Attempts remaining: " + (maxAttempts - attempts);
  }

  guessInput.value = "";

  if (attempts < maxAttempts && guess !== targetWord) {
    guessInput.focus();
  }
}

function startGame() {
  targetWord = getRandomWord();
  createBoard();
  guessInput.focus();
}

submitBtn.addEventListener("click", function() {
  checkGuess();
});

guessInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

startGame();
