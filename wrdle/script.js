const board = document.getElementById("board");
const tiles = Array.from(board.querySelectorAll(".tile"));

function randRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let cursor = 0;
let guesses = 0;
let word = words[randRange(0, words.length)];
let guess;

// Detect keystrokes
addEventListener("keydown", async function (event) {
  // Get the key that was pressed
  const key = event.keyCode;

  // If the key is a letter, add it to the word
  if (key >= 65 && key <= 90) {
    const letter = String.fromCharCode(key);
    tiles[cursor].textContent = letter;
    cursor++;
  } else if (key == 8) {
      if (cursor > 0) cursor--;
      tiles[cursor].textContent = ''
  } else if (key == 13 || key == 32) {
    // Check if the guess is correct
    guess = tiles.map((tile) => tile.textContent).join("");
    let isCorrect = -1;
    if (words.includes(guess.toLowerCase())) {
        isCorrect = false;
        for (let i = 0; i < 5; i++) {
          if (guess === word) {
            isCorrect = true;
            break;
          }
        }
    } else {
      const saved = tiles.map((tile) => tile.style.background).join("");
      for (i of tiles) {
          i.style.background = "red";
      }
      await new Promise(r => setTimeout(r, 100));
      for (let i = 0; i < 30; i++) {
          tiles[i].style.background = saved[i];
      }
    }
    
    // Update the board
    if (isCorrect === -1) {
        alert("word no exist >:(")
    }
    else if (isCorrect) {
      alert("Correct! The word was " + word);
    } else {
      for (let i = guesses*5+1; i <= (guesses+1)*5; i++) {
          console.log(i);
        const tile = board.querySelector(`#tile${i}`);
        if (guess[i] === word[i]) {
          tile.classList.add("correct");
        } else if (word.indexOf(guess[i]) !== -1) {
          tile.classList.add("present");
        } else {
          tile.classList.add("incorrect");
        }
      }
    }
    guesses++;
  }
});