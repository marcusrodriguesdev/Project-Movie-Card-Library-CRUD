import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: undefined,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((res) => {
      this.setState({
        movies: res,
      });
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <>
        { !movies && <Loading /> }
        { movies && (
          <div className="home-container">
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
            <div data-testid="movie-list">
              {
                movies.map((movie) => (
                  <MovieCard
                    key={ movie.title }
                    movie={ movie }
                  />
                ))
              }
            </div>
          </div>
        )}
      </>
    );
  }
}

export default MovieList;
