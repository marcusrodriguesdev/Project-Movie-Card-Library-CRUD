import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, subtitle,  imagePath, storyline} } = this.props
    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <img src={ imagePath }></img>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
