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
    this.fetchGetMovies();
  }

  // simulando a requisição de uma API, trabalhando com uma função assíncrona, desta forma só haverá a atribuição em 'object' quando minha função der uma resposta, que vai levar um tempinho até isso acontecer
  fetchGetMovies = async () => {
    const object = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: object,
    });
  }

  render() {
    const { movies, loading } = this.state;

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
