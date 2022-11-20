import React from "react";
import { useNavigate } from "react-router-dom";

function ResultList({ list = [] }) {
  const navigate = useNavigate();

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody>
        {list.map((stock) => (
          <tr
            key={stock.id}
            className={"cursor-pointer"}
            onClick={() => navigate(`./${stock.symbol}`)}
          >
            <td>{stock.displaySymbol}</td>
            <td>{stock.description}</td>
            <td>{stock.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultList;
