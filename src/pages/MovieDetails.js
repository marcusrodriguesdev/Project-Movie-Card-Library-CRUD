import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {},
    };
    this.fetchMovieById = this.fetchMovieById.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovieById(id);
    console.log(this.props);
  }

  async fetchMovieById(id) {
    const fetchMovie = await movieAPI.getMovie(id);
    this.setState({ movies: fetchMovie });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movies } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;
    const component = (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Título: ${title}`}</p>
        <p>{`Subtítulo: ${subtitle}`}</p>
        <p>{`Sinopse: ${storyline}`}</p>
        <p>{`Gênero: ${genre}`}</p>
        <p>{`Avaliação: ${rating}`}</p>
      </>
    );
    // const loading = <p> Carregando... </p>;

    return (
      <div data-testid="movie-details">
        {
          (movies.title === undefined) ? <Loading /> : component
        }
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

/* Referencia de consulta: https://stackoverflow.com/questions/46484026/eslint-react-router-v4-how-to-validate-match-params-props/47682384 */

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
