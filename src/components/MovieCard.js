import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath } = movie;

    return (
      <div data-testid="movie-card">
        <p>{title}</p>
        <img src={ imagePath } />
        <p>{storyline}</p>

      </div>
    );
  }
}

export default MovieCard;
