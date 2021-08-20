import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    // this.getMovies = this.getMovies.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }
  // foi usado setState para atualizar o estado do movies[]. Ajuda de Thais Sampaio para
  // a estruturação do código!

  componentDidMount() {
    this.movieRequestion();
  }

  async movieRequestion() {
    this.setState({
      movies: await movieAPI.getMovies(),
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        <span>
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </span>
      </div>
    );
  }
}

export default MovieList;
