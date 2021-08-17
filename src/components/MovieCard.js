import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath, genre, subtitle } } = this.props;
    return (
      <div data-testid="movie-card">
        <h3>{ title }</h3>
        <h5>{ subtitle }</h5>
        <img src={ imagePath } alt={ title } />
        <h4>{ genre }</h4>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
