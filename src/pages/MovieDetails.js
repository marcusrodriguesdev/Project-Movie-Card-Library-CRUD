import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
// import movies from '../services/movieData';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: '',
    };
  }

  componentDidMount() {
    this.returnGetMovie();
  }

  async returnGetMovie() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.setState({ loading: true }, async () => {
      const detailedMovie = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie: detailedMovie,
      });
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const {
      loading,
      movie: { title, storyline, imagePath, genre, rating, subtitle },
    } = this.state;

    return (
      <div data-testid="movie-details">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <h1>{title}</h1>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
