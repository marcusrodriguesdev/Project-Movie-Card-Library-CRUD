import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <div>
          <img src={ imagePath } alt={ title } />
          <h3>{ title }</h3>
        </div>
        <div>
          <p>{ storyline }</p>
        </div>
        <div>
          <Link
            to={ {
              pathname: `/movies/${id}`,
              movieProps: {
                id: { id },
              },
            } }
          >
            VER DETALHES
          </Link>
        </div>
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
