let min = 1;
let max = 100;
let playNum = Math.floor(Math.random() * (max - min + 1) + min);
let allGuess = [];
let attemptsLeft = 10;  // Track remaining guesses

const form = document.querySelector('form');
const msg = document.querySelector('#res');
const pvg = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const guessField = document.getElementById('guessField');
const lowOrHi = document.querySelector('.lowOrHi');

form.addEventListener('submit', function (smt) {
    smt.preventDefault();

    let guessedNumber = parseInt(guessField.value);

    // Check if input is valid
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
        // msg.innerHTML = `<span>Please enter a valid number between 1 and 100.</span>`;
        alert("Please Give a Valid Guess (Should be a number and must be between 1 and 100(included).")
        return;
    }

    allGuess.push(guessedNumber);
    pvg.textContent = allGuess.join(', ');

    // Decrease attempts left
    attemptsLeft--;
    lastResult.textContent = attemptsLeft;

    // Check if the guessed number is correct
    if (guessedNumber === playNum) {
        msg.innerHTML = `<span style="color: green;">Congratulations! Your guess is correct!</span>`;
        guessField.disabled = true;
        alert("Your Guess is Correct!!\nGame Over!!")
        return;
    } else {
        // msg.innerHTML = `<span style="color: red;">Try Again!</span>`;
        if (guessedNumber < playNum) {
            lowOrHi.textContent = "Your guess is too low!";
        } else {
            lowOrHi.textContent = "Your guess is too high!";
        }
    }

    // If no attempts left, end the game
    if (attemptsLeft === 0) {
        // msg.innerHTML = `<span style="color: orange;">Game Over! The correct number was ${playNum}.</span>`;
        alert(`Game Over!!The Number Was ${playNum}`)
        guessField.disabled = true;
    }

    // Clear input field
    guessField.value = '';
});
