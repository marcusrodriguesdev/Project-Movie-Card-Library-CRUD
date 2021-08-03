import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then(
        (result) => this.setState({
          loading: false,
          movies: result,
        }),
      );
  }

  render() {
    const { movies, loading } = this.state;
    const loadingElement = <Loading />;
    // Render Loading here if the request is still happening

    return (
      <div>
        <div className="movie-list" data-testid="movie-list">
          {loading
            ? loadingElement
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <div className="footer">
          <div className="flex">
            <Link to="/movies/new" className="movie-card-btn">ADICIONAR CARTÃO</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
