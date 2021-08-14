import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.requestAPI();
    this.deleteAPI();
  }

  async requestAPI() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      loading: true,
    });
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie: { ...movie },
      loading: false,
    });
  }

  async deleteAPI() {
    const { match: { params: { id } } } = this.props;
    const apagar = await movieAPI.deleteMovie(id);
    return apagar;
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) {
      return (
        <Loading />
      );
    }
    return (
      <div data-testid="movie-details">
        <img
          className="movie-card-image"
          alt="Movie Cover"
          src={ `../${movie.imagePath}` }
        />
        <h4 className="movie-card-title">{`Title: ${movie.title}`}</h4>
        <h5 className="movie-card-subtitle">{ `Subtitle: ${movie.subtitle}` }</h5>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p className="Rating">{ `Rating: ${movie.rating}` }</p>
        <Link className="link" to="/">VOLTAR</Link>
        <Link className="link" to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link className="link" to="/" onChange={ this.deleteAPI }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
};

export default MovieDetails;
