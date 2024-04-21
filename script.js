let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
   const options = ["Rock", "paper", "scissor"];
   const randIndx = Math.floor(Math.random() * 3);
   return options[randIndx];

};

const drawGame = () => {

   msg.innerText = "Game was Drwa. play again";
   msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userchoice, compChoice) => {

   if (userWin) {
      userscore++;
      userScorePara.innerText = userscore;
      msg.innerText = `you win , your ${userchoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
   } else {
      compscore++;
      compScorePara.innerText = compscore;
      msg.innerText = `you lose  ${compChoice} beats ,your ${userchoice}`;
      msg.style.backgroundColor = "red";
   }
}

const playGame = (userchoice) => {
   const compChoice = genComChoice();

   if (userchoice === compChoice) {
      //   draw game
      drawGame();
   } else {
      let userWin = true;
      if (userchoice === "Rock") {
         //  scissor , paper

         userWin = compChoice === "paper" ? false : true;

      } else if (userchoice == compChoice) {
         userWin = compChoice === "scissor" ? false : true;
      } else if (userchoice == compChoice) {
         userWin = compChoice === "Rock" ? false : true;
      }
      showWinner(userWin, userchoice, compChoice);
   }
};

choices.forEach((choice) => {
   choice.addEventListener("click", () => {
      const userchoice = choice.getAttribute("id")
      playGame(userchoice);

   });

});