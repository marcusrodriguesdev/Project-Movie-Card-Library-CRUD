import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, rating, genre, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        <div>
          <img src={ imagePath } alt={ title } />
          <p>{ title }</p>
          <p>{ subtitle }</p>
          <p>{ genre }</p>
          <p>{ storyline }</p>
          <p>{ rating }</p>
        </div>
        <div>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieCard;
