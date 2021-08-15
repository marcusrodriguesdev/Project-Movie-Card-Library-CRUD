import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };

    this.handleStateMovie = this.handleStateMovie.bind(this);
  }

  async componentDidMount() {
    const { props } = this;
    const { params } = props.match;
    const { id } = params;
    const requestMovie = await movieAPI.getMovie(id);
    this.handleStateMovie(requestMovie);
  }

  handleStateMovie(movie) {
    this.setState({
      movie: { ...movie },
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h3>{ title }</h3>
        </div>
        <div>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div>
          <Link to={ `/movies/${id}/edit` }>
            EDITAR
          </Link>
          <Link to="/">
            VOLTAR
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
