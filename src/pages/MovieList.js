import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.returnGetMovies();
  }

  async returnGetMovies() {
    const allMovies = await movieAPI.getMovies();
    this.setState({
      movies: [...allMovies],
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        <span>
          {movies.length > 0 ? (
            <div>
              {movies.map((movie) => (
                <MovieCard key={ movie.title } movie={ movie } />
              ))}
            </div>
          ) : (
            <Loading />
          )}
        </span>
      </div>
    );
  }
}

export default MovieList;
