import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';
import MovieCard from './Movies/MovieCard';
import saveMovie from './Movies/Movie'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
        <Route exact path="/" component={MovieList}/>
        <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={this.addToSavedList} />} />
        </div>
      </div>
    );
  }
}
