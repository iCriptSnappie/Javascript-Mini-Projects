let userScore = 0;
let compScore = 0;
let userScoreDisplay = document.querySelector("#user-score");
let compScoreDisplay = document.querySelector("#comp-score");
let statusMsg = document.querySelector("#msg");

const choices = document.querySelectorAll(`.choice`);

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }  else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

// Modules
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const drawGame = () => {
    statusMsg.innerText = "Game was Draw. Try Again!";
    statusMsg.style.backgroundColor = "#335c67";
}

const showWinner = (userWin) => {
    if(userWin){
        statusMsg.innerText = "You Win! Good Job!";
        statusMsg.style.backgroundColor = "#55a630";
        userScore++;
        userScoreDisplay.innerText = userScore;
    }else{
        statusMsg.innerText = "Oops! You Lose.";
        statusMsg.style.backgroundColor = "#bc4749";
        compScore++;
        compScoreDisplay.innerText = compScore;
    }
}