import React from 'react';

const GamesTable = (props) => {
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
    </table>
  )
}

export default GamesTable;
