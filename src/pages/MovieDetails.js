import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requisition: false,
      movie: [],
    };
    this.renderDetails = this.renderDetails.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    getMovie(id).then((response) => this.handleState(response));
  }

  handleState(movie) {
    this.setState({
      requisition: true,
      movie,
    });
  }

  renderDetails(movie) {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Ttile: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <br />
        <br />
        <Link to="/">VOLTAR</Link>
      </div>);
  }

  render() {
    const { state: { requisition, movie }, renderDetails } = this;
    return (
      <div>
        { requisition === true ? renderDetails(movie) : <Loading /> }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
