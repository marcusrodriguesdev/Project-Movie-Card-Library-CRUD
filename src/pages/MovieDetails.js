import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requisition: false,
      shouldRedirect: false,
      movie: [],
    };
    this.renderDetails = this.renderDetails.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  async handleDelete(movieId) {
    const { deleteMovie } = movieAPI;
    await deleteMovie(movieId);
    this.setState({
      shouldRedirect: true,
    });
  }

  renderDetails(movie) {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        {/* Não faria mais sentido ser um botão??
        Para fazer o redirecionamento através da checagem do state shouldRedirect?? */}
        <Link to="/" onClick={ () => this.handleDelete(id) }>DELETAR</Link>
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
    const { state: { shouldRedirect, requisition, movie }, renderDetails } = this;
    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }
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
