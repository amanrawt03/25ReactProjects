import React from "react";

const Matrix = ({value, mat,getCell }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td onClick={()=>getCell(0)}>{mat[0]}</td>
          <td onClick={()=>getCell(1)}>{mat[1]}</td>
          <td onClick={()=>getCell(2)}>{mat[2]}</td>
        </tr>
        <tr>
          <td onClick={()=>getCell(3)}>{mat[3]}</td>
          <td onClick={()=>getCell(4)}>{mat[4]}</td>
          <td onClick={()=>getCell(5)}>{mat[5]}</td>
        </tr>
        <tr>
          <td onClick={()=>getCell(6)}>{mat[6]}</td>
          <td onClick={()=>getCell(7)}>{mat[7]}</td>
          <td onClick={()=>getCell(8)}>{mat[8]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Matrix;
