import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="movie-card" data-testid="movie-card">
        <img
          src={ movie.imagePath }
          alt={ movie.title }
        />
        <h2>
          { movie.title }
        </h2>
        <p>
          { movie.storyline }
        </p>

        <Link to={ `movies/${movie.id}` }> VER DETALHES </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
