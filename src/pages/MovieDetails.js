import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchMovie = this.fetchMovie.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;

    this.setState(
      { loading: true },
      async () => {
        const movie = await movieAPI.getMovie(Number(id));
        const { title, storyline, imagePath, genre, rating, subtitle } = movie;

        this.setState({
          loading: false,
          title,
          storyline,
          imagePath,
          genre,
          rating,
          subtitle,
        });
      },
    );
  }

  deleteMovie() {
    const { match } = this.props;
    const { id } = match.params;

    movieAPI.deleteMovie(id);
  }

  renderMovie() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state;

    return (
      <div data-testid="movie-details">
        <p>{title}</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `${url}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }

  render() {
    return (
      loading ? <Loading /> : this.renderMovie()
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf().isRequired,
};

export default MovieDetails;
