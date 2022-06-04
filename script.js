

const gameBoard = () =>{
  const arr = [];
  return{arr}
}


const player = (marker) =>{
  const plays = [];
  const {arr} = gameBoard();
  const playerChoice = (input) => {
     // plays.push(input);
    }
  const print = () =>{

  }
  return {marker, playerChoice, print};
}


const player1 = player('x');
const player2 = player('o')
