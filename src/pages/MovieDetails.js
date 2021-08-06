import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

const defaultState = {
  id: 0,
  title: 'undefined',
  storyline: 'undefined',
  imagePath: 'undefined',
  genre: 'undefined',
  rating: 'undefined',
  subtitle: 'undefined',
};

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;

    this.fetchOneMovie = this.fetchOneMovie.bind(this);
    this.purgeMovie = this.purgeMovie.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.fetchOneMovie(id);
  }

  async fetchOneMovie(id) {
    const fetchedMovie = await movieAPI.getMovie(id);
    this.setState(fetchedMovie);
  }

  async purgeMovie(id) {
    const purge = await movieAPI.deleteMovie(id);
    this.setState(purge);

  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state;

    if (defaultState === this.state) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.purgeMovie(id) }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
}; // inspirado em https://stackoverflow.com/questions/46484026/eslint-react-router-v4-how-to-validate-match-params-props/47682384.
export default MovieDetails;
