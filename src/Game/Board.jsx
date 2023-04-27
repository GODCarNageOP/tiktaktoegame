import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (index) => {
    const X = "X";
    const O = "O";

    if (state[index] !== null) {
      return;
    }
    const click = [...state];
    click[index] = isX ? X : O;
    setState(click);
    setIsX(!isX);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winner) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  return (
    <div className="boardContainer">
      {isWinner ? (
        <>
        <div className="boardDisplay">
          <h1>Congratulations {isWinner} Won !</h1>
          <button onClick={handleReset} className="button">
            Play Again
          </button>
          </div>
        </>
      ) : (
        <>
          <h4>Player {isX ? "X" : "O"} please move</h4>
          <div className="board">
            <div className="boardRow">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="boardRow">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="boardRow">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </div>
          <div className="footer">
            <button onClick={handleReset} className="button">
              Restart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
