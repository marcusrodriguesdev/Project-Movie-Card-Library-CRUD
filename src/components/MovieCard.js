import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        <h4 className="movie-card-title">{ movie.title }</h4>
        <h5 className="movie-card-storyline">{ movie.storyline }</h5>
        <Link
          className="link"
          to={ `movies/${movie.id}` }
        >
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
  ).isRequired,
};

export default MovieCard;
