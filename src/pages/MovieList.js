import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.requestMovie = this.requestMovie.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.requestMovie();
  }

  async requestMovie() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies: [...movies],
      loading: false,
    });

    /* tentativa com fetch(falha)
    fetch(movieAPI.getMovies())
      .then((list) => this.setState({ movies: [...list], loading: false })); */
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">

        {loading ? <Loading className="loading" />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}

        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
