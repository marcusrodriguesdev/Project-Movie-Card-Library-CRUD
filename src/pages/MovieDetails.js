import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };

    this.handleMovies = this.handleMovies.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.handleMovies();
  }

  async handleMovies() {
    const { match: { params: { id } } } = this.props;
    const allMovies = await movieAPI.getMovie(Number(id));
    this.setState({
      movies: allMovies,
      loading: false,
    });
  }

  deleteMovie() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(Number(id));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movies, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;

    return (
      <div data-testid="movie-details">
        {loading ? <Loading />
          : (
            <div>
              <p>{`Title: ${title}`}</p>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
            </div>
          )}
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(
    PropTypes.number,
  ).isRequired,
};

export default MovieDetails;
