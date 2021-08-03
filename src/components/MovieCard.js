import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;

    return (
      <div className="movie-card" data-testid="movie-card">
        <div className="movie-card-box">
          <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
          <div className="movie-card-body">
            <h4 className="movie-card-title">{ title }</h4>
            <p className="movie-card-storyline">{ storyline }</p>
            <div className="flex">
              <Link to={ `/movies/${id}` } className="movie-card-btn">VER DETALHES</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
