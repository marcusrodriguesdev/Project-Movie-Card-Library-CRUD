import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id, imagePath } } = this.props;
    return (
      <div id="movie-card" data-testid="movie-card">
        Movie Card
        <p>{title}</p>
        <p>{storyline}</p>
        <img src={ imagePath } alt="Cover movie.png" />
        <Link to={ `movies/${id}` }> VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
};
