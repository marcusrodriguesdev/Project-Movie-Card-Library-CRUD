import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath,
      genre, id } = movie;
    return (
      <div data-testid="movie-card">
        <img className="Movie-card" src={ imagePath } alt={ title } />
        <p>{ title }</p>
        {/* <p>{ `Subtítulo: ${subtitle}` }</p> */}
        <p>{ storyline }</p>
        {/* <p>{ `Nota: ${rating}` }</p>
        <p>{ `Gênero: ${genre}` }</p> */}
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(String).isRequired,
};

export default MovieCard;
