import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading: true,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.FetchMoviesApi();
  }

  async deleteMovie() {
    const { match } = this.props;
    const deleta = await movieAPI.deleteMovie(match.params.id);
    return deleta;
  }

  async FetchMoviesApi() {
    const { match } = this.props;
    const moviesData = await movieAPI.getMovie(match.params.id);
    this.setState(
      {
        loading: false,
        movie: moviesData,
      },
    );
  }

  render() {
    const { movie: { title, storyline, imagePath, rating, subtitle, genre },
      loading } = this.state;
    const { match } = this.props;
    if (loading) return (<Loading />);
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${match.params.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
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
