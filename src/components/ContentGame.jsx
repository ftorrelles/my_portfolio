import { useState, useEffect } from "react";
import "../styles/game.css";
import SquareGame from "./SquareGame";
import { Button } from "react-bootstrap";

function ContentGame() {
  const [xIsNext, setXIsNext] = useState(true); // Control del turno
  const [count, setCount] = useState(0); // Contador de movimientos
  const [squares, setSquares] = useState(Array(9).fill(null)); // Estado del tablero

  // Lógica para manejar clics del jugador
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return; // Ignorar si la casilla ya está ocupada o si el juego terminó
    }

    const nextSquares = squares.slice();
    nextSquares[i] = "X"; // El jugador siempre será "X"
    setSquares(nextSquares);
    setXIsNext(false); // Turno de la máquina
    setCount(count + 1);
  }

  // Movimiento de la máquina
  useEffect(() => {
    if (!xIsNext && !calculateWinner(squares) && count < 9) {
      const timeout = setTimeout(() => {
        makeComputerMove();
      }, 500); // Retraso para simular "pensamiento"
      return () => clearTimeout(timeout); // Limpiar el timeout
    }
  }, [xIsNext, squares]);

  // Lógica para determinar el mejor movimiento de la máquina (incluye aleatoriedad)
  function getBestMove(squares) {
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

    // Introducir un factor de aleatoriedad (probabilidad de cometer un error)
    const randomFactor = Math.random();
    if (randomFactor < 0.3) {
      // 30% de las veces, la máquina elige una casilla vacía al azar
      const emptyIndices = squares
        .map((val, idx) => (val === null ? idx : null))
        .filter((val) => val !== null);
      return emptyIndices.length > 0
        ? emptyIndices[Math.floor(Math.random() * emptyIndices.length)]
        : null;
    }

    // Prioridad 1: Buscar una oportunidad para ganar
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] === "O" && squares[b] === "O" && !squares[c]) return c;
      if (squares[a] === "O" && squares[c] === "O" && !squares[b]) return b;
      if (squares[b] === "O" && squares[c] === "O" && !squares[a]) return a;
    }

    // Prioridad 2: Bloquear al jugador
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] === "X" && squares[b] === "X" && !squares[c]) return c;
      if (squares[a] === "X" && squares[c] === "X" && !squares[b]) return b;
      if (squares[b] === "X" && squares[c] === "X" && !squares[a]) return a;
    }

    // Prioridad 3: Elegir una casilla estratégica (centro primero, luego esquinas)
    if (!squares[4]) return 4; // Centro
    const corners = [0, 2, 6, 8];
    for (let corner of corners) {
      if (!squares[corner]) return corner;
    }

    // Prioridad 4: Elegir cualquier casilla vacía
    const emptyIndices = squares
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);
    return emptyIndices.length > 0 ? emptyIndices[0] : null;
  }

  // Lógica para que la máquina haga su movimiento
  function makeComputerMove() {
    const nextSquares = squares.slice();
    const bestMove = getBestMove(nextSquares);

    if (bestMove !== null) {
      nextSquares[bestMove] = "O"; // La máquina juega "O"
      setSquares(nextSquares);
      setXIsNext(true); // Regresa el turno al jugador
      setCount(count + 1);
    }
  }

  // Mostrar mensaje del estado del juego
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status =
      count === 9
        ? "Game Over"
        : "Next player: " + (xIsNext ? "X (You)" : "O (Computer)");
  }

  // Lógica para determinar el ganador
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

  // Reiniciar el juego
  const restart = () => {
    setSquares(Array(9).fill(null));
    setCount(0);
    setXIsNext(true);
  };

  return (
    <section className="sectionGame">
      <h4>Play with me, Tic-Tac-Toe</h4>
      <br />
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
  );
}

export default ContentGame;
