import React from 'react'

const Game = (props) => {
  console.log("game props ", props.game);
  return (
    <tr>
      <td>{props.game.name}</td>
      <td>{props.game.genre.name}</td>
    </tr>
  )
}

export default Game;
