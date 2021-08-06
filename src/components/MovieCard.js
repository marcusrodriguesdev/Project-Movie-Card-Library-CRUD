import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { imagePath, title, storyline, id, subtitle },
    } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="Movie Cover" />
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
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
    subtitle: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
