import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    const data = await movieAPI.getMovies();
    this.setState({ loading: false }, async () => {
      this.setState({
        movies: data,
        loading: true,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (!loading) return (<Loading />);
    return (
      <div>
        <section className="movie-header">
          <h1>Movie Cards Library CRUD</h1>
          <h6>
            <Link
              style={
                { textDecoration: 'none', color: 'rgb(247, 153, 14)' }
              }
              to="/movies/new"
            >
              ADICIONAR CARTÃO
            </Link>
          </h6>
        </section>
        <section data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </section>
      </div>
    );
  }
}

export default MovieList;
