import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;

    return (
      <div data-testid="movie-card">
        <p>{ title }</p>
        <p>{ storyline }</p>
        <div>

          <Link to={ `movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
