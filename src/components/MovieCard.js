import React from 'react';
import PropTypes from 'prop-types';

/* Todos os MovieCards devem possuir em seu conteúdo, pelo menos,
 o título, a sinopse e um link com o texto "VER DETALHES" que aponta
 para a rota movies/:id, onde :id é o id do filme. Esta rota exibirá
 informações detalhadas de um filme. */

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ storyline }</h4>
        <h3>{ genre }</h3>
        <p>{ `Rating: ${rating}` }</p>
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
  }).isRequired,
};

export default MovieCard;
