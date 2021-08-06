import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;

    return (
      <div data-testid="movie-card">
        <div className="theMovieCard">
          <div>
            <img src={ imagePath } alt="Movie Cover" />
            <h1>
              { title }
            </h1>
            <h3>
              { subtitle }
            </h3>
            <p>
              { storyline }
            </p>
            <Link to={ `/movies/${id}` }>VER DETALHES</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MovieCard;
