import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movies: [],
    };
    this.fetchRequisition = this.fetchRequisition.bind(this);
  }

  async componentDidMount() {
    this.fetchRequisition();
  }

  async fetchRequisition() {
    this.setState({ loading: true },
      async () => {
        const resolve = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: [...resolve],
        });
      });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {
          loading ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
