import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, imagePath, subtitle, storyline } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ imagePath } />
        <div>
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
  movie: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieCard;
