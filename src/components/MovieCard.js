import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, genre, rating, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <img alt="Movie Cover" src={ imagePath } />
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <p>{ genre }</p>
        <p>{ rating }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
