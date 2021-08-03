import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, subtitle, storyline, imagePath } } = this.props;

    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="movie-card-image-container">
          <img className="movie-card-image" alt="Movie Cover" src={ imagePath } />
        </div>

        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>

        <div className="movie-card-rating">
          <Link to={ `movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
