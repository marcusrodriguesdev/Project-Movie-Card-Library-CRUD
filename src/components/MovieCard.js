import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, storyline, id } = movie;
    return (
      <>
        <div data-testid="movie-card">
          Movie Card
        </div>
        <img src={ imagePath } alt={ title } />
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        <div>
          <Link
            to={ `movies/${id}` }
          />
        </div>
      </>
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
