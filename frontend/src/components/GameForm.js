import React, { Component } from 'react';
import GenreDropdown from './GenreDropdown';

export default class GameForm extends Component {
  state = {
    name: "",
    genre: {
      id: "",
      name: "",
    }
  }

  selectGenre = (event) => {
    const genre = this.props.genres.find(genre => genre.id == event.target.value);
    this.setState({ genre });
  }

  handleName = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/boardgames`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          genre: this.state.genre,
        })
      }
    )
      .then(res => res.json())
      .then(json => {
        this.props.addGame(json);
        console.log(json);
      })
  }

  render() {
    return (
      <div className="addform">
        <form className="create" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Filter board games by name"
              value={this.state.name}
              onChange={this.handleName}
            />
          </label>
          <GenreDropdown
            genres={this.props.genres}
            currentGenre={this.state.genre}
            handleDropdown={this.selectGenre}
          />
          <input type="submit" value="Add Game" />
        </form>
      </div>
    )
  }
}
