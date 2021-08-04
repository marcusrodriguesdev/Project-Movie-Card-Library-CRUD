import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.deleteMovieCard = this.deleteMovieCard.bind(this);
  }

  componentDidMount() {
    this.returnMovie();
  }

  async returnMovie() {
    // const { match } = this.props;
    // const { id } = match.params;
    const { match: { params: { id } } } = this.props;
    const getMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: getMovie,
      loading: false,
    });
  }

  async deleteMovieCard() {
    const { match: { params: { id } } } = this.props;
    const movies = await movieAPI.deleteMovie(id);
    this.setState({ movie: movies });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match: { params: { id } } } = this.props;

    if (loading === true) {
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
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        {/* Com a ajuda no stackoverflow para conseguir implementar o onclick no Link */}
        <Link to="/" onClick={ this.deleteMovieCard }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
