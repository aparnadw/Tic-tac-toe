import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function deriveActivePlayer(gameTruns){
  console.log('gameTruns - ', gameTruns)
      let currentPlayer = "X";

      if (gameTruns.length > 0 && gameTruns[0].Player === "X") {
        currentPlayer = "O";
      }

      return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      console.log('prv - ', prevTurns)
      let currentPlayer = deriveActivePlayer(prevTurns);

      if (prevTurns.length > 0 && prevTurns[0].Player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];
      console.log('update ', updatedTurns);
      return updatedTurns;
    });
    console.log("active palyer --", gameTurns.player);
    console.log("gameTurns palyer --", gameTurns);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={gameTurns.player === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={gameTurns.player === "O"}
          />
        </ol>
        GAME BOARD
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        ></GameBoard>
      </div>
      <Log  turns = {gameTurns}/>
    </main>
  );
}

export default App;
