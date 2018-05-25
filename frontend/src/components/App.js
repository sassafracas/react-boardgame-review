import React, { Component } from 'react';
import '../assets/css/App.css';
import Header from './Header';
import BoardGameContainer from '../containers/BoardGameContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BoardGameContainer />
      </div>
    );
  }
}

export default App;
