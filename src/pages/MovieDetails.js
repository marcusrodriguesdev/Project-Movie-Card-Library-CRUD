import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movies: {},
    };
    this.fetchMovieById = this.fetchMovieById.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    this.fetchMovieById(params.id);
  }

  async fetchMovieById(id) {
    const fetchMovie = await movieAPI.getMovie(id);
    this.setState({ movies: fetchMovie });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movies } = this.state;
    console.log(movies);
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
    const loading = <p> Carregando... </p>;

    return (
      <div data-testid="movie-details">
        {
          (movies.title === undefined) ? loading : component
        }
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
