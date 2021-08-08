import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie :{ id, title, imagePath,  storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <section className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={title } />
        <h4>{ title }</h4>
        <p>{storyline }</p>
        <Link to={ `/movies/${id}` }> VER DETALHES </Link>
      </section>
      
      </div>
    ); 
  }
}

export default MovieCard;
