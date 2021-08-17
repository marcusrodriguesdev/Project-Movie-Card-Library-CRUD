import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <div style={ {color: 'red'} }>{ movie.title }</div>
        <div>{ movie.storyline }</div>
        <a href={ `http://localhost/movies/${movie.id}` }>VER DETALHES</a>
      </div>
    );
  }
}

export default MovieCard;
