import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  deleteMovie = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    movieAPI.deleteMovie((id));
  }

  fetchMovie = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const data = await movieAPI.getMovie(id);

    if (data) {
      this.setState({ movie: data, loading: false });
    }
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const {
      match: { url },
    } = this.props;

    if (loading === true) {
      return <Loading />;
    }

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `${url}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetails;
