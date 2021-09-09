import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import '../styles/styles.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { loading, movies } = this.state;
    return (
      <div data-testid="movie-list" className="movie-list">
        { loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
