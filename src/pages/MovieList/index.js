import React, { Component } from 'react';
import MovieCard from '../../components/MovieCard';
import Loading from '../../components/Loading';
import './styles.css';

import * as movieAPI from '../../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => {
        this.setState({
          movies,
          isLoading: false,
        });
      });
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div className="movies-container" data-testid="movie-list">
        {
          isLoading
            ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

export default MovieList;
