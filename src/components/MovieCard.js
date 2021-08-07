import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Todos os MovieCards devem possuir em seu conteúdo, pelo menos,
 o título, a sinopse e um link com o texto "VER DETALHES" que aponta
 para a rota movies/:id, onde :id é o id do filme. Esta rota exibirá
 informações detalhadas de um filme. */

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img className="movie-img" alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="info">
          <div className="movie-header">
            <div className="movie-title">
              <h1>{ title }</h1>
              <h2>{ `${subtitle}` }</h2>
            </div>
            <h3 className="type">{ genre }</h3>
            <h4 className="rate">{ `Rating: ${rating}` }</h4>
          </div>
          <div className="movie-desc">
            <p className="text">{ storyline }</p>
          </div>
          <div className="show-details">
            <Link className="details-link" to={ `movies/${id}` }>VER DETALHES</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({ /* https://reactjs.org/docs/typechecking-with-proptypes.html --An object talking on a particular shape. */
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
    subtitle: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
