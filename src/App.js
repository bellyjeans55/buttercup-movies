import React, { Component } from 'react';

import Movie from './model/movie.js';

import logo from './images/logo.png';
import searchIcon from './images/searchIcon.png';
import tv from './images/tv.png'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <h1 className="App-title">Buttercup</h1>
        <SearchPane />
      </div>
    );
  }
}

function Logo(props) {
  return (
    <img src={logo} className="App-logo" alt="logo"/>
  );
}

// TODO: Hit searchMovies(query) API
function SearchBar(props) {
  return (
    <div className="SearchBar">
      <form>
        <i className="SearchIcon fa fa-search"></i>
        <input type="text" name="query" placeholder="Search..."/>
      </form>
    </div>
  );
}

function SearchMovieItem(props) {
  return (
    <div className="SearchMovieItem">
    {props.movie.title}
    </div>
  );
}

function SearchPane(props) {
  let movie1 = new Movie(69420, "Chungking Express", new Date("1996-3-8"), "Wong Kar-Wai", 169420, true);
  let movie2 = new Movie(69421, "In the Mood for Love", new Date("1996-3-8"), "Wong Kar-Wai", 169421, true);
  let movieList = [
    movie1,
    movie2
  ];
  return (
    <div className="SearchPane">
      <SearchBar />
      <SearchResults movieList={movieList} />
    </div>
  );
}

// Parameters:
//   movieList: Array of movie objects.
function SearchResults(props) {
  let searchMovieItemList = props.movieList;
  // TODO: make SearchMovieItem for each element in movieList
  return (
    <div className="SearchResults">
      <SearchMovieItem movie={searchMovieItemList[0]}/>
    </div>
  );
}

function TV(props) {
  let tv_path = "./" + props.destination;
  return (
    <a href={tv_path}><img src={tv} className="TV" alt="TV"/></a>
  );
}

export default App;
