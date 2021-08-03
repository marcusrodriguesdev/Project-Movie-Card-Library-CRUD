import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: [],
    };

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async componentWillUnmount() {
    const { match } = this.props;
    const deleteMovie = await movieAPI.deleteMovie(match.params.id);
    return deleteMovie;
  }

  async fetchMovie() {
    const { match } = this.props;
    const movieDetail = await movieAPI.getMovie(match.params.id);
    this.setState({
      loading: false,
      movie: movieDetail,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const {
      movie:
      { title,
        storyline,
        imagePath,
        genre,
        rating,
        subtitle },
      loading } = this.state;

    const { match } = this.props;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>

        <Link to={ `/movies/${match.params.id}/edit` }> EDITAR </Link>
        <Link to="/"> VOLTAR </Link>
        <Link to="/"> DELETAR </Link>
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
