/* eslint-disable react/prop-types */
export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row} ${turn.square.col}`}>
          current player - {turn.player} and selected {turn.square.row}{" "}
          {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
