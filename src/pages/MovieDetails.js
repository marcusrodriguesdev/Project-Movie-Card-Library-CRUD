import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.state = {
      movie: [],
      load: true,
      id,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    movieAPI.getMovie(id)
      .then((response) => this.setState({ movie: response, load: false }));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { load, movie } = this.state;
    return (
      <div data-testid="movie-details">
        {load && <Loading />}
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <h1>{ `Title: ${movie.title}` }</h1>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link to={ `/movies/${movie.id}/edit` }>
          EDITAR
        </Link>
        <Link to="/">
          VOLTAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
