import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline } = movie;
    return (
      <Router>

        <div data-testid="movie-card">
          <h4>{title}</h4>
          <h5>{storyline}</h5>
        </div>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </Router>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
