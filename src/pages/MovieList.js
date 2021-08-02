import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
  }
  
  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    movieAPI.getMovies()
      .then((movies) => {
        this.setState({
          movies,
          loading: false,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    const success = (
      <div>
        <div id="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
          <Link id="add-card-link" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
    return (
      <div data-testid="movie-list">
        {loading ? <h1>Carregando...</h1> : success }
      </div>
    );
  }
}

export default MovieList;
