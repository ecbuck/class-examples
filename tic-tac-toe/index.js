const squareButtonElements = document.querySelectorAll(".square");
const bannerElement = document.querySelector("#banner");
const resetGameButtonElement = document.querySelector("#resetGame");

let currentPlayersTurn = "X";
let isGameOver = false;
let turnCount= 0;

bannerElement.textContent=`Current Players Turn: ${currentPlayersTurn}`;

for (let i = 0; i < squareButtonElements.length; i++) {
  const squareButton = squareButtonElements[i];

  squareButton.addEventListener("click", function(event) {
    const element = event.target;
    const currentValue = element.textContent;

    if (currentValue !== ''|| isGameOver) {
      return;
    }

    turnCount++;

    if (currentPlayersTurn === "X") {
      element.textContent = "X";
      checkForWinner(currentPlayersTurn);
      currentPlayersTurn = "O";
    } else {
      element.textContent = "O";
      checkForWinner(currentPlayersTurn);
      currentPlayersTurn = "X";
    }

    if(!isGameOver) {
        bannerElement.textContent=`Current Players Turn: ${currentPlayersTurn}`;
    }


    if(turnCount === 9){
        isGameOver= true;
    }
  });
}


resetGameButtonElement.addEventListener('click', function (){
    squareButtonElements.forEach((squareElement) => {
        squareElement.textContent ='';

    });

    isGameOver = false;
    currentPlayersTurn='X'
    turnCount = 0;
    bannerElement.textContent=`Current Players Turn: ${currentPlayersTurn}`;

});

function checkForWinner(player){
    
    const square1Value= squareButtonElements[0].textContent;
    const square2Value= squareButtonElements[1].textContent;
    const square3Value= squareButtonElements[2].textContent;
    const square4Value= squareButtonElements[3].textContent;
    const square5Value= squareButtonElements[4].textContent;
    const square6Value= squareButtonElements[5].textContent;
    const square7Value= squareButtonElements[6].textContent;
    const square8Value= squareButtonElements[7].textContent;
    const square9Value= squareButtonElements[8].textContent;

    if(square1Value=== player && square2Value=== player &&  square3Value=== player){
        isGameOver= true;
    }

    else if(square4Value=== player && square5Value === player && square6Value === player){
        isGameOver= true;

    }
    else if(square7Value=== player && square8Value === player && square9Value === player){
        isGameOver= true;

    }
    else if(square1Value=== player && square4Value === player && square7Value=== player){
        isGameOver= true;
    }
    else if(square2Value=== player && square5Value === player && square8Value=== player){
        isGameOver= true;
    }
    else if(square3Value=== player && square6Value === player && square9Value===player){
        isGameOver= true;
    }
    else if(square1Value=== player && square5Value === player && square9Value=== player){
        isGameOver= true;
    }
    else if(square3Value=== player && square5Value === player && square7Value=== player){
        isGameOver= true;
    }
    else if(turnCount === 9) {
        bannerElement.textContent = 'GAME TIE';
    }

    if(isGameOver && turnCount !==9){
        bannerElement.textContent = `Player ${player} is the Winner!`;

    }
    else if(turnCount===9){
        isGameOver= true;
        bannerElement.textContent= 'GAME TIE FOOLS'
    }
}