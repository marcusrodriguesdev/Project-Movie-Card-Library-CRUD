import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      getDetails: {},
      loading: true,
    };
    this.movDetails = this.movDetails.bind(this);
  }

  componentDidMount() {
    this.movDetails();
  }

  async movDetails() {
    const { match: { params: { id } } } = this.props;
    const getDetails = await movieAPI.getMovie(id);
    this.setState({ getDetails, loading: false });
  }

  render() {
    const { getDetails, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = getDetails;

    // Change the condition to check the state
    if (loading === true) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Tile ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.number,
    }),
  }).isRequired,
};
