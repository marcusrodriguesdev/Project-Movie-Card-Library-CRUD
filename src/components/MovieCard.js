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
          <div>
            Title:
            <div>{title}</div>
          </div>
          <div>
            Subtitle:
            <div>{subtitle}</div>
          </div>
          <div>
            Storyline:
            <div>{storyline}</div>
          </div>
          <div>
            Genre:
            <div>{genre}</div>
          </div>
          <div>
            Rating:
            <div>{rating}</div>
          </div>
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
