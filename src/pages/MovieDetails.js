import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './pages.css';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      details: {},
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails() {
    this.setState({
      loading: true,
    }, async () => {
      const { match } = this.props;
      const { params } = match;
      const details = await movieAPI.getMovie(params.id);
      this.setState({
        loading: false,
        details,
      });
    });
  }

  detailedMovie() {
    const { details } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = details;
    return (
      <div data-testid="movie-details" className="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="movie-details-text">
          <p>{`Título: ${title}`}</p>
          <p>{ `SubTítulo: ${subtitle}` }</p>
          <p>{ `Sinopse: ${storyline}` }</p>
          <p>{ `Gênero: ${genre}` }</p>
          <p>{ `Avaliação: ${rating}` }</p>
          <Link to="/" className="return">  VOLTAR </Link>
          <br />
          <Link to={ `/movies/${id}/edit` } className="edit"> EDITAR </Link>
          <br />
          <Link to="/" onClick={ () => movieAPI.deleteMovie(id) } className="delete">
            DELETAR
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        { loading ? <Loading /> : this.detailedMovie() }
      </div>

    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieDetails;
