import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;

    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
        <h4>{ subtitle }</h4>
        <p>{ storyline }</p>
        <Link to={ (`movies/${id}`) }>VER DETALHES</Link>
        <img alt="Movie Cover" src={ imagePath } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
