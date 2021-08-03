import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } width="200" />
        <h2>{title}</h2>
        <h3>{storyline}</h3>
        <a href={ `movies/${id}` }>VER DETALHES</a>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
