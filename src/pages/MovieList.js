import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loaded: false,
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies: [...movies],
      loaded: true,
    });
  }

  render() {
    const { movies, loaded } = this.state;

    // if (loaded === false) {
    //   return <Loading />;
    // }

    return (
      <div data-testid="movie-list">
        {loaded ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading /> }
      </div>
    );
  }
}

export default MovieList;
