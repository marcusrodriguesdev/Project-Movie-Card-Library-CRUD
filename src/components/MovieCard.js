import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCards.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img alt="movie cover" src={ imagePath } />
        <div className="movie-card-name">
          <h2>{ title }</h2>
          <p>{ storyline }</p>
          <Link to={ `movies/${id}` } className="see-details">VER DETALHES</Link>
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieCard;
