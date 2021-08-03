import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: undefined,
    };

    this.displayMovie = this.displayMovie.bind(this);
    this.deleteRequisition = this.deleteRequisition.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  displayMovie() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.deleteRequisition(id) }>DELETAR</Link>
      </div>
    );
  }

  deleteRequisition(id) {
    movieAPI.deleteMovie(id);
  }

  async fetchApi() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.setState({ loading: true }, async () => {
      const response = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie: response,
      });
    });
  }

  render() {
    const { loading } = this.state;

    return loading ? <Loading /> : this.displayMovie();
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
