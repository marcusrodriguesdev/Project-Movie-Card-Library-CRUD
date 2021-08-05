import React from 'react';
import { Link } from 'react-router-dom';

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

export default MovieCard;
