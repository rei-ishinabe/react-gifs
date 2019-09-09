import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "WqdlKyZrAX3NA4uIUv"
    }

    this.search("disney");
  }

  search = (query) => {
    giphy('c9S1fPnDDZL8CynFEtKO8TQz77fS6eYo').search({
        q: query,
        rating: 'g',
        limit: 10
    }, (err, res) => {
        this.setState({
          gifs: res.data
        })
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
