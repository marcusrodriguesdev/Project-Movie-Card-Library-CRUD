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
  }

  componentDidMount() {
    this.handleMovies();
  }

  async handleMovies() {
    const { match: { params: { id } } } = this.props;
    const allMovies = await movieAPI.getMovie(id);
    this.setState({
      movies: allMovies,
      loading: false,
    });
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
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{`Title: ${title}`}</p>
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
            </div>
          )}
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
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
