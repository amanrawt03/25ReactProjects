import React, { useEffect, useState } from "react";
import "./ttt.css";
import Matrix from "./Matrix";

const TicTacToe = () => {
  const matrix = new Array(9).fill("");
  const winningPats = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [mat, setMat] = useState(matrix);
  const [xTurn, setXTurn] = useState("X");
  const [mesg, setMesg] = useState("X's Turn");
  const [stop, setStop] = useState(false);

  const handleCell = (id) => {
    if (mat[id] !== "" || stop) return;
    const currMat = [...mat];
    currMat[id] = xTurn === "X" ? "X" : "O";
    setMat(currMat);
    setXTurn(xTurn === "X" ? "O" : "X");
  };

  const handleOnReset = () => {
    setMat(matrix);
    setMesg("X's Turn");
    setXTurn("X");
    setStop(false);
  };
  useEffect(() => {
    let flag = true;
    for (let i = 0; i < 8; i++) {
      const [x, y, z] = winningPats[i];
      if (mat[x] != "" && mat[x] === mat[y] && mat[x] === mat[z]) {
        setMesg(`${mat[x]} WON`);
        setStop(true);
        return;
      }
    }
    if (mat.every(cell => cell !== "")) {
      setMesg("It's a Tie!");
      return;
    }
    setMesg(xTurn === "X" ? "X's Turn" : "O's Turn");
  }, [xTurn, mat]);
  return (
    <div className="main">
      <Matrix mat={mat} getCell={handleCell} />
      <h3>{mesg}</h3>
      <button onClick={handleOnReset}>Reset</button>
    </div>
  );
};
export default TicTacToe;
