import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <div id="title">
          { movie.title }
        </div>
        <div id="storyline">
          { movie.storyline }
        </div>
        {console.log(`ID = ${movie.id}`)}
        <Link to={ `movies/${movie.id}` }>VER DETALHES</Link>
        <br />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
