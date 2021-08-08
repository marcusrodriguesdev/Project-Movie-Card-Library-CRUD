import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{movie.title}</h1>
        <p>{movie.storyline}</p>
        <img src={ movie.imagePath } alt="imagem" />
        <Link to={ `movies/${movie.id}` }> VER DETALHES </Link>
      </div>
    );
  }
}

export default MovieCard;
