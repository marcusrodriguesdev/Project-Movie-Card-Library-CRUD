import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{storyline}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ])).isRequired,
};

export default MovieCard;
