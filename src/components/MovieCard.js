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
        <div className="info">
          <div className="movie-header">
            <h1>{ title }</h1>
            <h2>{ `Subtitle: ${subtitle}` }</h2>
            <img className="movie-img" alt="Movie Cover" src={ `../${imagePath}` } />
            <h3 className="type">{ genre }</h3>
          </div>
          <div className="movie-desc">
            <p className="text">{ storyline }</p>
          </div>
          <h4 className="rate">{ `Rating: ${rating}` }</h4>
          <Link to={ `movies/${id}` }>VER DETALHES</Link>
        </div>
        <div className="blur-back bright-back" />
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
