import React from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    // this.getMovies = this.getMovies.bind(this);

    this.state = {
      movies: [],
    };
  }
  // foi usado setState para atualizar o estado do movies[]. Ajuda de Thais Sampaio para 
  // a estruturação do código!

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        <span>
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </span>
      </div>
    );
  }
}

export default MovieList;
