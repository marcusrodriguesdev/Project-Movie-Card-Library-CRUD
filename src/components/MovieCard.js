import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, imagePath, storyline, title } } = this.props;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="Movie Cover" />
        <h1>{ title }</h1>
        <p>{ storyline }</p>

        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
