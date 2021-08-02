import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <div className="text-area-movie-card">
          <h1>{ title }</h1>
          <p>{ storyline }</p>
          <Link className="link" to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
