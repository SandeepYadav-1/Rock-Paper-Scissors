let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_Score = document.querySelector("#user-score");
const comp_Score = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    // console.log("game was draw/.");
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "rgb(1, 25, 40)";
};


const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        //console.log("you win!");
        userScore++;
        user_Score.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        //console.log("you lose");
        compScore++;
        comp_Score.innerText = compScore;
        msg.innerText = `You lost!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    // console.log("user choice =", userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    //console.log("computer choice = ", compChoice);
    if (compChoice === userChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice == "rock") {
            // computer -> scissors, paper
            if (compChoice === "paper") {
                userWin = false;
            }
            else { //if (compChoice === "scissors") 
                userWin = true;
            }
        }

        else if (userChoice == "paper") {
            // computer -> scissors, rock
            if (compChoice === "rock") {
                userWin = true;
            }
            else { //if (compChoice === "scissors") 
                userWin = false;
            }
        }
        else if (userChoice == "scissors") {
            // computer -> paper, rock
            if (compChoice === "rock") {
                userWin = false;
            }
            else { //if (compChoice === "paper") 
                userWin = true;
            }
        }
        showWinner(userWin, compChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});