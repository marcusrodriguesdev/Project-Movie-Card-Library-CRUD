import React from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ movie.imagePath } alt={ movie.title } />
        <p>{ movie.title }</p>
        <p>{ movie.storyline }</p>
        <Link href={ <MovieDetails /> }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
