import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

const initialState = {
  id: 0,
  title: 'undefined',
  storyline: 'undefined',
  imagePath: 'undefined',
  genre: 'undefined',
  rating: 'undefined',
  subtitle: 'undefined',
};
class MovieDetails extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.fetchMovie(id);
  }

  async handleDelete(id) {
    console.log(id);
    await movieAPI.deleteMovie(id);
  }

  async fetchMovie(id) {
    const movie = await movieAPI.getMovie(id);
    this.setState(movie);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state;

    if (this.state === initialState) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{title}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link onClick={ () => this.handleDelete(id) } to="/">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
