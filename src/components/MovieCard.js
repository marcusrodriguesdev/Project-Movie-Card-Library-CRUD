import React from 'react';
import { Link } from 'react-router-dom';

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

export default MovieCard;
