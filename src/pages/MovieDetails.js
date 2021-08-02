import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      movieReady: false,
    };

    this.setMovie = this.setMovie.bind(this);
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const { id } = params;
    const movieResponse = await movieAPI.getMovie(id);
    this.setMovie(movieResponse);
  }

  setMovie(movie) {
    this.setState({
      movie: { ...movie },
      movieReady: true,
    });
  }

  render() {
    const { movieReady,
      movie: { id, title, storyline, imagePath, genre, rating, subtitle } } = this.state;
    const returnedMovie = () => (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ title }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
    return (
      <div data-testid="movie-details">
        {movieReady ? returnedMovie() : <Loading /> }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};
export default MovieDetails;
