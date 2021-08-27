import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };

    this.handleMovie = this.handleMovie.bind(this);
  }

  async componentDidMount() {
    const { props } = this;
    const { params } = props.match;
    const { id } = params;
    const data = await movieAPI.getMovie(id);
    this.handleMovie(data);
  }

  handleMovie(request) {
    this.setState({
      movie: { ...request },
      loading: false,
    });
  }

  deletMovie(id) {
    movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movie: {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id } } = this.state;
    if (loading) {
      return (
        <Loading />
      );
    }
    return (
      <div data-testid="movie-details">
        <h1>{ title }</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div>
          <h4>{ title }</h4>
        </div>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>
            EDITAR
          </Link>
          <Link to="/" onClick={ () => { this.deletMovie(id); } }>DELETAR</Link>
          <Link to="/">
            VOLTAR
          </Link>
        </div>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
  param: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
export default MovieDetails;
