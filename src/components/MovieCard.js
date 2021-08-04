import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, storyline, id } } = this.props;
    return (
      <Router>
        <div data-testid="movie-card">
          <img src={ imagePath } alt={ title } />
          <h1>{ title }</h1>
          <p>{ storyline }</p>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </Router>
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
