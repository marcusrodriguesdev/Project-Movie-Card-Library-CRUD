import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath, rating } } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
        <img src={ imagePath } alt="movie_image" />
        <p>{ storyline }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    subtitle: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
  }).isRequired,
};
