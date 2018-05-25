import React from 'react'

const Game = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.genre}</td>
    </tr>
  )
}

export default Game;
