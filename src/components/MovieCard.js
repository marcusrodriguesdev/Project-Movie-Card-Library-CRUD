import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-card" className="movie-card-menu">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="movie-card-menu-text">
          <div>Title: <p>{title}</p></div>
          <div>Subtitle: <p>{subtitle}</p></div>
          <div>Storyline: <p>{storyline}</p></div>
          <div>Genre: <p>{genre}</p></div>
          <div>Rating: <p>{rating}</p></div>
          <Link className="link" to={ `movies/${movie.id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
