import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, rating, imagePath, bookmarked, genre } = movie;

    return (
      <div data-testid="movie-card">
        <div className="theMovieCard">
          <div>
            <img src={ imagePath } />
            <h1> { title } </h1>
            <h3> { subtitle } </h3>
            <p> { storyline } </p>
            <p> 
              { <Link to={`movies/${id}`} > VER DETALHES </Link> }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
