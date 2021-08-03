import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;
    return (
      <div className="movie-card" data-testid="movie-card">
        <h4 className="movie-card-title">Movie Card</h4>
        <h5 className="title-movie-card">{ title }</h5>
        <p className="descrição">{ storyline }</p>
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <Link className="detalhes" to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
