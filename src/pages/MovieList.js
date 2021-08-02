import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

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
      </div>
    );
  }
}

export default MovieList;
