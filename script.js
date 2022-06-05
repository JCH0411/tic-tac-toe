const game = (() => {
  let humanPlayer = null;
  const ready = () => {
     if(humanPlayer != null)
      return true;
     else {
       return false;
     }
  }
  const addHumanPlayer = (human) => {
    humanPlayer = human;

  }

  return {
    addHumanPlayer,
    ready
  }
})();

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("mark")) {
    const choice = player(event.target.textContent);
    game.addHumanPlayer(choice);
    document.querySelector(".playerSelect").removeChild(".playerSelect.markers");
  }
  event.stopPropagation();
})


document.querySelector(".game").addEventListener("click", (event) => {

  event.stopPropagation();

})
const winningOptions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];


const gameBoard = () => {
  const arr = [];
  return {
    arr
  }
}

const player = (marker) => {
  const plays = [];
  const {
    arr
  } = gameBoard();
  const playerChoice = (input) => {
    // plays.push(input);
  }
  const print = () => {
    return marker;
  }
  return {
    marker,
    playerChoice,
    print
  };
}


// const player1 = player('x');
