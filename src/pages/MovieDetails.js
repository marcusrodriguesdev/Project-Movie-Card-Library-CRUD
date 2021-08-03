import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.getMovie(id)
      .then(
        (result) => this.setState({
          loading: false,
          movie: result,
        }),
      );
  }

  deleteMovie(idMovie) {
    movieAPI.deleteMovie(idMovie)
      .then(
        (resolve) => ((resolve.status === 'OK')
          ? this.setState({ shouldRedirect: true }) : false
        ),
      );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const loadingElement = <Loading />;
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    const movieDetail = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ title }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
      </div>
    );

    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
    // Redirect
      return <Redirect to="/" />;
    }

    return (
      <div>
        {loading
          ? loadingElement
          : movieDetail}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
