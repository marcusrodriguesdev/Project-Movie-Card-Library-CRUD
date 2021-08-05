import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie :{ title, imagePath,  storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <section className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={title } />
        <h4>{ title }</h4>
        <p>{storyline }</p>
      
      </section>
      
      </div>
    );
  }
}

export default MovieCard;
