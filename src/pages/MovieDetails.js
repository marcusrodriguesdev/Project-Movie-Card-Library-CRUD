import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id).then((response) => response).then((movie) => {
      const { title, storyline, imagePath, genre, rating, subtitle } = movie;

      this.setState(
        {
          loading: false,
          id,
          title,
          storyline,
          imagePath,
          genre,
          rating,
          subtitle,
        },
      );
    });
  }

  render() {
    const {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      loading,
    } = this.state;

    return (
      loading
        ? <Loading />
        : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <h4>{`Title: ${title}`}</h4>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          </div>
        )
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf().isRequired,
};

export default MovieDetails;
