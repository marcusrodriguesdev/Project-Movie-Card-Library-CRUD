import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, storyline, imagePath, title } } = this.props;
    // console.log(movie);
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
