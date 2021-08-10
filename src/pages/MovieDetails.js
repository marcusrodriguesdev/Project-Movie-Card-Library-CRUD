import React, { Component } from 'react';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: {},
    };

    this.movieRequisition = this.movieRequisition.bind(this);
  }

  componentDidMount() {
    this.movieRequisition();
  }

  async movieRequisition() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const movie = await movieAPI.getMovie(id);
    console.log(id);
    // console.log(movie); Retorna uma promisse
    this.setState({
      loading: false,
      movie,
    });
  }

  render() {
    // Change the condition to check the state
    const { loading, movie } = this.state;
    console.log(movie);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading) return <Loading />;

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
  match: propTypes.objectOf(
    propTypes.number,
    propTypes.string,
  ).isRequired,
};

export default MovieDetails;
