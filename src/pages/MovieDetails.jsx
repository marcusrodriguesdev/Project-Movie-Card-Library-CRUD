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
      loadingScreen: true,
    };
    this.requisition = this.requisition.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.requisition();
  }

  async requisition() {
    // const { match } = this.props;
    // const { params } = match;
    // const { id } = params;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const response = await movieAPI.getMovie(id);
    if (response) {
      this.setState({
        movie: response,
        loadingScreen: false,
      });
    }
  }

  delete() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { loadingScreen, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    if (loadingScreen === true) {
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
        <Link to="/" onClick={ this.delete }>DELETAR</Link>
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
