import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const movieId = `/movies/${movie.id}`;
    return (
      <div data-testid="movie-card" className="container-card">
        <h2>Movie Card</h2>
        <p>{ movie.title }</p>
        <p>{ movie.storyline }</p>
        <Link to={ movieId } className="route-link">VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.objectOf(
    propTypes.string,
    propTypes.bool,
    propTypes.number,
  ).isRequired,
};

export default MovieCard;
