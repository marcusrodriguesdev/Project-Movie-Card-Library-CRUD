import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    // const { key, movie } = this.props;
    const { movie } = this.props;

    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ movie.imagePath } />
        <h3>{movie.title}</h3>
        <p>{movie.storyline}</p>
        <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
