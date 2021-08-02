import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const chosenMovie = await movieAPI.getMovie(parseInt(id, 10));
    this.getMovieDetails(chosenMovie);
  }

  getMovieDetails(chosenMovie) {
    this.setState({ movie: chosenMovie, loading: false });
  }

  async deleteMovie() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { title, storyline, id, imagePath, genre, rating, subtitle } = movie;

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </div>
        <div>
          <Link onClick={ this.deleteMovie } to="/">DELETAR</Link>
        </div>
        <div>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  genre: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
}.isRequired;

export default MovieDetails;
