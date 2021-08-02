import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const request = await movieAPI.getMovie(match.params.id).then((data) => data);
    this.setarEstado(request);
  }

  setarEstado(estado) {
    this.setState({
      movie: ([estado]),
    });
  }

  deleteMovie(id) {
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    const { movie } = this.state;
    if (movie.length === 0) return <Loading />;
    const { match } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie[0];

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${match.params.id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.deleteMovie(match.params.id) }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.defaultProps = {
  match: {},
};

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default MovieDetails;
