import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <section>
          <img alt="Movie Cover" src={ movie.imagePath } />
          <p>{movie.title}</p>
          <p>{movie.storyline}</p>
        </section>
        <br />
        <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
};
