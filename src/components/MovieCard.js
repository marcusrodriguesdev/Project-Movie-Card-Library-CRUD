import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    // const { key, movie } = this.props;
    const { movie } = this.props;
    const movieDetailsUrl = `/movies/${movie.id}`;

    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ movie.imagePath } />
        <h3>{movie.title}</h3>
        <p>{movie.storyline}</p>
        <Link to={ movieDetailsUrl }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
