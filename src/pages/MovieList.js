import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const { getMovies } = movieAPI;
    await getMovies().then((response) => {
      this.setState({
        movies: [...response],
      });
    });
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        <span>
          { movies.length === 0 ? <Loading /> : null}
        </span>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
