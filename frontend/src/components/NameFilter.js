import React, { Component } from 'react';

class NameFilter extends Component {
  state = {
    query: ""
  }

  handleNameFilter = (event) => {
    this.setState({ query: event.target.value }, () => {
      console.log(this.state)
    });
  }

  handleNameSubmit = (event) => {
    event.preventDefault();

    this.props.handleNameSubmit(this.state.query);
  }

  render() {
    return (
      <div className="filter">
        <form className="search" onSubmit={this.handleNameSubmit}>
          <label>
            Name Filter:
            <input
              type="text"
              name="name"
              placeholder="Filter board games by name"
              value={this.state.query}
              onChange={this.handleNameFilter}
            />
          </label>
          <input type="submit" value="Filter " />
        </form>
      </div>
    )
  }
}

export default NameFilter;
