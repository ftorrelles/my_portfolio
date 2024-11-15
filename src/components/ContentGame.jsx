import { useState } from "react";
import "../styles/game.css";
import SquareGame from "./SquareGame";
import { Button } from "react-bootstrap";

function ContentGame() {
  const [xIsNext, setXIsNext] = useState(true);
  const [count, setCount] = useState(0);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    /// create copy and add X or O
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setCount(count + 1);
  }

  /// Show message
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    count === 9
      ? (status = "Juego terminado ")
      : (status = "Siguiente jugador: " + (xIsNext ? "X" : "O"));
  }

  /// Calculate winer
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  /// restart game
  const restart = () => {
    setSquares(Array(9).fill(null));
    setCount(0);
  };

  return (
    <>
      <section className="sectionGame">
        <h4>Juego 3 en linea</h4>
        <br />

        {/* <ButtonComponent info="restart" action={restart} /> */}
        <div className="board-row">
          <SquareGame value={squares[0]} onSquareClick={() => handleClick(0)} />
          <SquareGame value={squares[1]} onSquareClick={() => handleClick(1)} />
          <SquareGame value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <SquareGame value={squares[3]} onSquareClick={() => handleClick(3)} />
          <SquareGame value={squares[4]} onSquareClick={() => handleClick(4)} />
          <SquareGame value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <SquareGame value={squares[6]} onSquareClick={() => handleClick(6)} />
          <SquareGame value={squares[7]} onSquareClick={() => handleClick(7)} />
          <SquareGame value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <br />
        <div className="status">{status}</div>

        <Button style={{ backgroundColor: "#78a083" }} onClick={restart}>
          Restart
        </Button>
      </section>
    </>
  );
}

export default ContentGame;
