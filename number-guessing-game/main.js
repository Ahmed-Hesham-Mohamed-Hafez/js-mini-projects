let secretNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 0; 

let guessInput = document.getElementById("guessInput");
let resultDiv = document.getElementById("result");
let attemptCount = document.getElementById("attemptCount");
let form = document.getElementById("guessForm");
let playAgainBtn = document.getElementById("playAgainBtn");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    let userGuess = parseInt(guessInput.value);
    attempts++; 
    attemptCount.textContent = attempts;
    
    if (userGuess === secretNumber) {
        resultDiv.innerHTML = `Correct! You got it in ${attempts} attempts!`; 
        form.style.display = "none"; 
    } else if (userGuess < secretNumber) {
        resultDiv.innerHTML = "Too Low!";
    } else if (userGuess > secretNumber) {
        resultDiv.innerHTML = "Too High!";
    }
    
    guessInput.value = ""; 
});

playAgainBtn.addEventListener("click", function() {
    secretNumber = Math.floor(Math.random() * 100) + 1; 
    attempts = 0;
    attemptCount.textContent = 0;
    resultDiv.innerHTML = "";
    guessInput.value = "";
    form.style.display = "block"; 
    playAgainBtn.style.display = "none"; 
});