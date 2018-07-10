import React from 'react';
import Game from "./Game"
const GamesTable = (props) => {

  const mapGames = () => {
    console.log(props)
    return props.games.map(gameObj => {return <Game game={gameObj} />})
  }

  const filterGames = () => {
    return props.games.filter(gameObj => {
      return gameObj.genre.id === props.currentGenre.id})
  }


  return (
    <table className="games">
      <tbody>
        <tr>
          <th>
            <h3 className="">Name</h3>
          </th>
          <th>
            <h3 className="">Genre</h3>
          </th>
        </tr>
        {props.currentGenre.id ? filterGames() : mapGames()}
      </tbody>
    </table>
  )
}

export default GamesTable;
