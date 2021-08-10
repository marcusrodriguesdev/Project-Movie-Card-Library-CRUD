import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie: { id, title, storyline } } = this.props;

    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to={ `/movies/${id}` }>Ver Detalhes</Link>
      </div>
    );
  }
}

export default MovieCard;
