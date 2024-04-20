/* eslint-disable react/prop-types */
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard( { onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  // drive state
  for(const turn of turns){
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handelSelectSquare(rowIndex,colIndex) {
  //   console.log("handelFunction call");
    
  //   setGameBoard((prevGameBoard)=> {
  //       const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //       if(updatedBoard[rowIndex][colIndex] == null){ 
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       }
  //       return updatedBoard;
  //   });

  //   onSelectSquare()
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
