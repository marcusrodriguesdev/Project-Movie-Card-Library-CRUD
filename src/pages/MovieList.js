import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    console.log('componente montado');
    this.fetchGetMovies();
  }

  // simulando a requisição de uma API
  fetchGetMovies = async () => {
    const object = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: object,
    });
  }

  toLoad = () => {
    const { loading } = this.state;
    if (loading === true) {
      console.log('carregando...');
      return (
        <div>
          <Loading />
        </div>
      );
    }
  }

  render() {
    console.log('componente renderizado');
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    // this.toLoad();

    return (
      <div data-testid="movie-list">
        { 
          // como visto na documentação (https://pt-br.reactjs.org/docs/conditional-rendering.html)
          loading ? <Loading /> :
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

export default MovieList;
