import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Touchable from '../Touchable';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div
        style={
          ({ background: `url(./${movie.imagePath}) center / cover no-repeat` })
        }
        className="card-container"
        data-testid="movie-card"
      >
        <div className="card-overlay" />
        <div className="card-body">
          <span>{ movie.title }</span>
          <p>{ movie.storyline }</p>
          <Touchable to={ `/movies/${movie.id}` } type="link">VER DETALHES</Touchable>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
