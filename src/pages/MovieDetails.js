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

  componentWillUnmount() {
    // Dica do Rafael Nery Machado
    this.setState = () => {};
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
    const { shouldRedirect } = this.state;

    const movieDetail = (
      <div className="movie-card-box details">
        <div className="movie-details" data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <div className="movie-card-body">
            <h2 className="movie-card-title">{ title }</h2>
            <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
            <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
            <p className="movie-card-storyline">{ `Genre: ${genre}` }</p>
            <p className="movie-card-storyline">{ `Rating: ${rating}` }</p>
            <div className="flex">
              <Link to={ `/movies/${id}/edit` } className="movie-card-btn">EDITAR</Link>
              <Link to="/" className="movie-card-btn">VOLTAR</Link>
              <Link
                to="/"
                onClick={ () => this.deleteMovie(id) }
                className="movie-card-btn"
              >
                DELETAR
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

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
