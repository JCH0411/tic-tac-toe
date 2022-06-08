//winning choices
const winningOptions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
//module to control flow of the game
const game = (() => {
  let humanPlayer = null;
  let totalPlays = null;
  let ai = null;
  let winningCells = winningOptions.length;

  const ready = () => {
    if (humanPlayer != null)
      return true;
    else {
      return false;
    }
  }

  const getHumanMarker = () => {
    return humanPlayer.returnMarker();
  }
  const getAiMarker = () => {
    return ai.returnMarker()
  }
  const getGameSize = () => {
    return totalPlays.sizeOfGame();
  }
  const checkForAiWinner = () => {

  }
  const checkForHumanWinner = () =>{

      for(let x = 0; x < winningCells; x++){
         for(let i = 0; i < 3; i++){
           if(winningOptions[x][i] === humanPlayer.checkValues())

         }
      }
  }

  const addHumanPlayer = (human) => {
    humanPlayer = human;
    totalPlays = gameBoard();
    if (humanPlayer.returnMarker() === "X") {
      ai = player("O")
    } else {
      ai = player("X")
    }

    length = document.querySelectorAll(".mark").length;
    for (let x = 0; x < length; x++) {
      document.querySelectorAll(".mark")[x].disabled = true;
    }
  }


  const storeAiSelect = (input) => {
    ai.addPlayerChoice(input);
    totalPlays.pushPlays(input);

  }

  const storePlayerSelect = (input) => {
    humanPlayer.addPlayerChoice(input);
    totalPlays.pushPlays(input);
  }
  return {
    addHumanPlayer,
    ready,
    getHumanMarker,
    storePlayerSelect,
    storeAiSelect,
    getAiMarker,
    getGameSize,
    checkForAiWinner,
    checkForHumanWinner
  };
})();

//player select of either X or O
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("mark")) {
    const choice = player(event.target.textContent);
    game.addHumanPlayer(choice);

  }
  event.stopPropagation();
})

// event to place X or O on gameboard
document.querySelector(".game").addEventListener("click", (event) => {
  if (game.ready()) {

    if (!event.target.hasChildNodes()) {
      let playerSelect = document.createElement("p");
      playerSelect.classList.add("game-cell")
      playerSelect.textContent = game.getHumanMarker();
      event.target.append(playerSelect);
      game.storePlayerSelect(event.target.id);
      game.checkForAiWinner();
      setTimeout(() => {
        aiPlay()
      }, "900")

    } else { //need to figure out this else

    }
  } //need to remove or use this else --remider for later possibly use for AI
  else {

  }
  event.stopPropagation();

})

//function to use ai to play
const aiPlay = () => {

  let gameboardNodes = document.querySelectorAll(".gameboard");
  len = document.querySelectorAll(".gameboard").length;
  let rand = Math.floor(Math.random() * 9);
  if (!gameboardNodes[rand].hasChildNodes() && game.getGameSize() <= 8) {
    let aiSelect = document.createElement("p");
    aiSelect.classList.add("game-cell");
    aiSelect.textContent = game.getAiMarker();
    gameboardNodes[rand].append(aiSelect);
    game.storeAiSelect(gameboardNodes[rand].id);
  }

}




//gameboard object
const gameBoard = () => {
  const game = [];
  const pushPlays = (input) => {
    game.push(input);

  }
  const checkGame = () => {
    if (game.length === 9) {
      return true;
    } else {
      return false;
    }

  }
  const sizeOfGame = () => {

    return game.length;
  }
  return {
    game,
    pushPlays,
    sizeOfGame
  };
}

// player object
const player = (marker) => {
  const plays = [];

  const addPlayerChoice = (input) => {
    plays.push(input);
  }

  const returnMarker = () => {
    return marker;
  }

  return {
    returnMarker,
    addPlayerChoice,
    plays

  };
}


// const player1 = player('x');
