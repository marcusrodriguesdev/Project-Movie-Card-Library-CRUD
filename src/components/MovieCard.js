import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath, rating, id } } = this.props;
    return (
      <div data-testid="movie-card">
        Movie Card
        <img src={ imagePath } alt="Movie Cover" />
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
