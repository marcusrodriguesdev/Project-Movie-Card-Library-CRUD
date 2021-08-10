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
      loading: true,
    };

    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.requestMovie();
  }

  // VALEU @RayNfeeral ( Rafael Nery Machado ), ME AJUDOOOU DEMAAAIS, Aprendi a como usar isso lendo o seu codigo
  componentWillUnmount() {
    this.setState = () => {};
  }

  async requestMovie() {
    const { match: { params: { id } } } = this.props;
    const movieData = await movieAPI.getMovie(id);

    this.setState({
      movie: movieData,
      loading: false,
    });
  }

  async deleteMovie() {
    const { match: { params: { id } } } = this.props;
    console.log(await movieAPI.deleteMovie(id));
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (loading) {
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
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
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
