const gameBoard = () =>{
  const arr = [1,2,3,4,5,6,7,8,9];
  return{arr}
}


const player = (marker) =>{
  const plays = [];
  const {arr} = gameBoard();
  const playerChoice = (input) => {
     plays.push(input);
    }
  const print = () =>{
    
  }
  return {marker, playerChoice, print};
}


const player1 = player('x');
console.log(player1 instanceof gameBoard)
