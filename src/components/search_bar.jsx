import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    console.log("SEARCH_BAR RENDER");
    return (
      <input type="text" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
