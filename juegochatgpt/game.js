const guessButton = document.getElementById("guess-button");
const numberGuess = document.getElementById("number-guess");
const message = document.getElementById("message");

const secretNumber = Math.floor(Math.random() * 100) + 1;

guessButton.addEventListener("click", function() {
  if (Number(numberGuess.value) === secretNumber) {
    message.innerText = "¡Adivinaste! El número era " + secretNumber;
  } else if (Number(numberGuess.value) < secretNumber) {
    message.innerText = "El número es más alto";
  } else {
    message.innerText = "El número es más bajo";
  }
});