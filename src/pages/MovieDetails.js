import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

const initialState = {
  id: 0,
  title: 'undifined',
  storyline: 'undifined',
  imagePath: 'undifined',
  genre: 'undifined',
  rating: 'undifined',
  subtitle: 'undifined',
};

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovie(id);
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
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
