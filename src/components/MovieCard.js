import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { subtitle, imagePath, title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <div>
          <img src={ imagePath } alt="movieCard" />
          <h3>{ title }</h3>
          <h4>{ subtitle }</h4>
          <p>{ storyline }</p>

        </div>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,

};

export default MovieCard;
