import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ imagePath } alt={ title } />
        <p>{title}</p>
        <p>{storyline}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieCard;
