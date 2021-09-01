import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">
            {title}
          </h4>
          <p className="movie-card-storyline">
            {storyline}
          </p>
        </div>
        <p className="detail-card">
          <Link
            style={
              { textDecoration: 'none', color: 'rgb(247, 153, 14)' }
            }
            to={ `/movies/${id}` }
          >
            VER DETALHES
          </Link>
        </p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
