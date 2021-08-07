import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
// import { PROPERTY_TYPES } from '@babel/types';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: undefined,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id)
      .then((infos) => this.setState({ movie: infos }));
  }

  render() {
    const { movie } = this.state;
    if (movie) {
      const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h1>{title}</h1>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>

        </div>
      );
    }
    return <Loading />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
