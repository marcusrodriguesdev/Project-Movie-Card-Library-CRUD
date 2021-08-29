import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      movie: {},
    };

    this.renderMovieData = this.renderMovieData.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.renderMovieData();
  }

  deleteMovie() {
    const { movie } = this.state;
    const { history: { push } } = this.props;

    movieAPI.deleteMovie(movie.id).then((response) => {
      if (response.status === 'OK') push('/');
    });
  }

  renderMovieData() {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true }, () => {
      movieAPI
        .getMovie(parseInt(id, 10))
        .then((movie) => this.setState({ loading: false, movie }));
    });
  }

  render() {
    const { movie, loading } = this.state;

    return (
      <div data-testid="movie-details">
        {loading ? (
          <Loading />
        ) : (
          <>
            {/* o título, o subtítulo, a sinopse, a imagem e o gênero do filme */}
            <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
            <p>{`Title: ${movie.title}`}</p>
            <p>{`Subtitle: ${movie.subtitle}`}</p>
            <p>{`Storyline: ${movie.storyline}`}</p>
            <p>{`Genre: ${movie.genre}`}</p>
            <p>{`Rating: ${movie.rating}`}</p>
            <div className="controls">
              <Link to="/">VOLTAR</Link>
              <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
              <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
            </div>
          </>
        )}

      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default MovieDetails;
