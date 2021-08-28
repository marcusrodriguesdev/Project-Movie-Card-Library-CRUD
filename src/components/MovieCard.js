import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { key, movie } = this.props;
    const { id, title, imagePath, subtitle, storyline } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ imagePath } />
        <div key={ key }>
          <p>{ title }</p>
          <p>{ subtitle }</p>
          <p>{ storyline }</p>
          <Link to={ `/movies/${id}` }>
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  key: PropTypes.string.isRequired,
  movie: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieCard;
