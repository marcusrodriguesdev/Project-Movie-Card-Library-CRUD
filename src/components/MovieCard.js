import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie }= this.props
    const titulo = movie.title 
    const sinopse = movie.storyline 
    return (
    <div data-testid="movie-card" > 
      <div>
        {titulo}
      </div>
      <div>
        {sinopse}
      </div>
      
        Movie Card 
        <Link to={`movies/${movie.id}`} >VER DETALHES</Link> 
        
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
