import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { getMovies } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading: true,
    };
  }

  getMovieApi = async () => {
    const moviesApi = await getMovies();
    this.setState({ loading: false, movie: moviesApi });
  }

  componentDidMount = () => {
    this.getMovieApi();
  }

  render() {
    // Change the condition to check the state
    const { loading, movie } = this.state;

    if (loading) return <Loading />;

    const { match: { params: { id } } } = this.props;
    const {
      title, storyline, imagePath, genre, rating, subtitle,
    } = movie[id - 1];

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
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieDetails;
