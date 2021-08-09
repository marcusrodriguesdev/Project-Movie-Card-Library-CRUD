import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      isLoading: true,
      deleteMovie: false,
    };
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  handleDeleteMovie() {
    const { movie } = this.state;
    const { id } = movie;
    movieAPI.deleteMovie(id).then(() => {
      this.setState({
        deleteMovie: true,
      });
    });
  }

  async fetchMovieDetails() {
    const { match: { params: { id } } } = this.props; /* match https://reactrouter.com/web/api/match */
    const movieData = await movieAPI.getMovie(id);
    this.setState({ movie: movieData, isLoading: false });
  }

  render() {
    const { movie: { title, storyline, imagePath, genre, rating, subtitle, id },
      isLoading, deleteMovie, shouldRedirect } = this.state;
    if (isLoading) return <Loading />;
    if (deleteMovie) return <Redirect to="/" />;
    if (shouldRedirect) return <Redirect exact to="/" />;
    return (
      <div data-testid="movie-details" className="movie-card">
        <img className="movie-img" alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="info">
          <div className="movie-header">
            <div className="movie-title">
              <h1>{ title }</h1>
              <h2>{ subtitle }</h2>
              <h3 className="type">{ genre }</h3>
            </div>
          </div>
          <div className="movie-desc">
            <p className="text">{ storyline }</p>
            <h4 className="rate">{ `Rating: ${rating}` }</h4>
          </div>
          <div className="movie-buttons">
            <Link className="edit-movie" to={ `${id}/edit` }>EDITAR</Link>
            <Link className="back" to="/">VOLTAR</Link>
            <Link className="del" onClick={ this.handleDeleteMovie } to="/">DELETAR</Link>
          </div>
        </div>
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
