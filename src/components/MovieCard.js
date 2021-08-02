import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{movie.title}</h1>
        <h2>{movie.subtitle}</h2>
        <img src={ movie.imagePath } alt="imagens-filmes" />
        <p>{movie.storyline}</p>
        <p>{movie.rating}</p>
        <p><Link to={ `/movies/${movie.id}` }>VER DETALHES</Link></p>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
