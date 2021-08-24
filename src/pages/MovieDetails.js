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
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, loading: false });
  };

  deletingMovie = async (id) => {
    await movieAPI.deleteMovie(id);
  };

  render() {
    const { movie, loading } = this.state;
    // console.log(movie);
    if (movie !== undefined) {
      const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
      return loading ? (
        <Loading />
      ) : (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{`title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to="/">VOLTAR</Link>
          <br />
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <br />
          <Link to="/" onClick={ () => this.deletingMovie(id) }>
            DELETAR
          </Link>
        </div>
      );
    }
    return <div />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
