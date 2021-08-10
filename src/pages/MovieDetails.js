import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieInfo from '../components/MovieInfo';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = () => {
    this.setState(
      { loading: true },
      async () => {
        const { match } = this.props;
        const data = await movieAPI.getMovie(match.params.id);
        this.setState({
          loading: false,
          movie: data,
        });
      },
    );
  }

  deleteMovie = () => {
    const { movie } = this.state;
    movieAPI.deleteMovie(movie.id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    const { match } = this.props;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : <MovieInfo
          imagePath={ imagePath }
          title={ title }
          subtitle={ subtitle }
          storyline={ storyline }
          genre={ genre }
          rating={ rating }
        />}
        <Link to={ `/movies/${match.params.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
