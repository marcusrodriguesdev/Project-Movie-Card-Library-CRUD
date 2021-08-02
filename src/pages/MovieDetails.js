import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';

import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };

    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then((res) => {
      this.setState({
        movie: res,
      });
    });
  }

  deleteHandler() {
    const { movie } = this.state;
    const { id } = movie;
    const { history } = this.props;

    movieAPI.deleteMovie(id).then((res) => {
      if (res.status === 'OK') {
        history.push('/');
      }
    });
  }

  render() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <>
        { !title && <Loading /> }
        { title && (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Title: ${title}`}</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to={ `/movies/${id}/edit` } style={ { textDecoration: 'none' } }>
              EDITAR
            </Link>
            <Link to="/">VOLTAR</Link>
            <Link onClick={ this.deleteHandler } to="/">DELETAR</Link>
          </div>
        )}
      </>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default MovieDetails;
