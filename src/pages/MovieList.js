import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => this.setState({ movies: response }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happeningg
    // Code-review do projeto do colega Gustavo Rios me ajudou com a logica do loading.(https://github.com/tryber/sd-013-b-project-movie-card-library-crud/pull/105/commits/661cd6da92a9a6079aef78649254eb55846509d0#diff-d3f52d2edf9703baa4b5e8d68b716b2f718095c63a5b48db049f9b88d46870aaR17)
    return (
      <div data-testid="movie-list">
        { movies.length
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}
      </div>
    );
  }
}

export default MovieList;
