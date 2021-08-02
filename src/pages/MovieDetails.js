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
      isLoading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    movieAPI.getMovie(id)
      .then((movie) => {
        this.setState({
          movie,
          isLoading: false,
        });
      });
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = () => {};
  }

  handleDelete(movieId) {
    movieAPI.deleteMovie(movieId);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, isLoading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">
          VOLTAR
        </Link>
        <Link to={ `/movies/${id}/edit` }>
          EDITAR
        </Link>
        <Link to="/" onClick={ () => this.handleDelete(id) }>
          DELETAR
        </Link>
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
