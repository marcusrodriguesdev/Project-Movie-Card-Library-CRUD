import React from 'react';
import './moviecard.css';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card" className="movie-card">
        Movie Card
        <div className="movie-title">{this.props.movie.title}</div>
        <div className="movie-sinopse">{this.props.movie.storyline}</div>
        <Link to={ `/movies/${this.props.movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
