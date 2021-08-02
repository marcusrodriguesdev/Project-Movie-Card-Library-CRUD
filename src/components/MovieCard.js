import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline } } = this.props;
    return (
      <div>
        <div data-testid="movie-card">
          <div>
            <h4>{ title }</h4>
            <p>{ storyline }</p>
            <Link to={ `/movies/${id} ` }>VER DETALHES</Link>
          </div>
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
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }),
}.isRequired;
