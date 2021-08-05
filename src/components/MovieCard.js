import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { title, storyline, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="teste" />
        <p>
          { title }
        </p>
        <h1>{ storyline }</h1>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.number).isRequired,
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
