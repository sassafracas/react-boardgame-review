import React, { Component } from 'react';
import GameFilters from './GameFilters';
import GenreDropdown from '../components/GenreDropdown';
import GamesTable from '../components/GamesTable';
import GameForm from '../components/GameForm';

const API = 'http://localhost:3000';

/*
  App
    Header
    BoardGameContainer
      GameFilters
        GenreDropdown
        NameFilter
      GameForm
        GenreDropdown
        input
        submit
      GameTable
*/
export default class BoardGameContainer extends Component {
  state = {
    games: [],
    genres: [],
    currentGenre: {
      id: "",
      name: "",
    },
    query: "",
    filteredGames: [],
  }

  componentDidMount() {
    fetch(`${API}/genres`)
      .then(res => res.json())
      .then(json => {
        this.setState({ genres: json });
      });
    fetch(`${API}/boardgames`)
      .then(res => res.json())
      .then(json => {
        this.setState({ games: json, filteredGames: json });
      });
  }

  genreFilter = (event) => {
    // Option 1: match by name === value
    // const currentGenre = this.state.genres.find(genre => genre.name === event.target.value);
    // Option 2: change value to id in <option> and for controlled value in <select> and match by id === value
    //           Remember: The content of this attribute represents the value to be submitted with the form.
    //                     There's no rule about it having to match the name displayed.
    const currentGenre = event.target.value === "" ?
      { id: "", name: "" }
    :
      this.state.genres.find(genre => genre.id == event.target.value);
    // Option 3: pull id out using index + data attribute, then match on id
    // const id = event.target.options[event.target.selectedIndex].dataset.value;
    // const currentGenre = this.state.genres.find(genre => genre.id == id);
    // Option 4: same as option 3 but use getAttribute
    // const id = event.target.options[event.target.selectedIndex].getAttribute('data-value');
    // const currentGenre = this.state.genres.find(genre => genre.id == id);

    this.setState({
      currentGenre,
      filteredGames: this.state.games.filter(game => currentGenre.name === "" || game.genre.name === currentGenre.name)
    });
  }

  // Combining the two filters.
  /*
     *IMPORTANT*
     We have a query state up here as well as in NameFilter
     because they are different!!
     The query in NameFilter tracks the state of the input as it changes.
     The query in BoardGameContainer is updated on submit
       AND is always used in our combined filter.

     Now, if we wanted to filter _on every keystroke_,
     then we'd _only_ have query in BoardGameContainer.
     We wouldn't want to keep a separate copy of state in NameFilter.
     We'd turn NameFilter back into a functional component.
     We'd also remove the useless submit button.
  */
  filterGames = () => {
    return this.state.games.filter(game =>
      (this.state.currentGenre.name === "" || game.genre.name === this.state.currentGenre.name)
      &&
      (this.state.query === "" || game.name.toLowerCase().includes(this.state.query.toLowerCase()))
    );
  }

  // handleNameFilter = (event) => {
  //   this.setState({ query: event.target.value }, () => {
  //     console.log(this.state)
  //   });
  // }

  // handleNameSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     filteredGames: this.state.games.filter(game => game.name.toLowerCase().includes(this.state.query.toLowerCase()))
  //   })
  // }

  handleNameSubmit = (query) => {
    this.setState({ query });
  }

  addGame = (game) => {
    this.setState({
      games: [...this.state.games, game],
      filteredGames: [...this.state.games, game]
    }, () => {
      console.log('added game', this.state)
    })
  }

  render() {
    return (
      <div>
        <GameFilters
          genres={this.state.genres}
          currentGenre={this.state.currentGenre}
          handleGenreFilter={this.genreFilter}
          handleNameFilter={this.handleNameFilter}
          query={this.state.query}
          handleNameSubmit={this.handleNameSubmit}
        />
        <GameForm
          genres={this.state.genres}
          handleSubmit={this.handleSubmit}
          addGame={this.addGame}
        />
        {/* <GamesTable games={this.state.filteredGames} /> */}
        <GamesTable games={this.filterGames()} />
      </div>
    )
  }
}
