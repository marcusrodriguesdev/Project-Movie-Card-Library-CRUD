import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        {console.log(movie)}
        <h1>{movie.title}</h1>
        <h2>{movie.subtitle}</h2>
        <img src={ movie.imagePath } alt="imagens-filmes" />
        <p>{movie.storyline}</p>
        <p>{movie.rating}</p>
      </div>
    );
  }
}

export default MovieCard;
