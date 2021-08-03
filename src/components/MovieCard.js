import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card" class="movie-card">
        <p class="card-title">
          { movie.title }
        </p>
        <p class="card-story">
          { movie.storyline }
        </p>
        <img src={ movie.imagePath } alt={ movie.title } height="200px"/>
        <Link to={ `/movies/${movie.id}` } class="details-button">VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
