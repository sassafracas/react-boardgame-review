import React from 'react';
import Game from './Game';

const GamesTable = ({ games }) => {
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
      </tbody>

      {
        games.map(game => {
          return <Game key={game.id} name={game.name} genre={game.genre.name} />
        })
      }
    </table>
  )
}

export default GamesTable;
