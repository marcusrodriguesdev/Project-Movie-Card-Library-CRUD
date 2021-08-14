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

  render() {
    const { movie, loading } = this.state;
    if (loading) {
      return (
        <Loading />
      );
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <p>{`Title: ${movie.title}`}</p>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
};

export default MovieDetails;
