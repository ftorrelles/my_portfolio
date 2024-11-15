const SquareGame = ({ value, onSquareClick }) => {
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
};

export default SquareGame;
