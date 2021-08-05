import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card" className="movie-card-div">
        <img src={ movie.imagePath } alt="" />
        <p>{movie.title}</p>
        <p>{ movie.subtitle }</p>
        <p>{ movie.genre }</p>
        <p className="storyline">{movie.storyline}</p>
        <p>{ movie.rating }</p>
        <Link to={ `/movies/${movie.id}` } className="details-link">VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    genre: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
