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

    this.setMovie = this.setMovie.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setMovie(movie);
  }

  setMovie(movie) {
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      loading ? <Loading />
        : (
          <div
            data-testid="movie-details"
            className="movie-details-page"
          >
            <div className="movie-details-img">
              <img alt="Movie Cover" src={ `../${imagePath}` } />
            </div>

            <div className="movie-details">
              <h1>{ title }</h1>

              <div className="details">
                <p>
                  <strong>Subtitle: </strong>
                  { subtitle }
                </p>
                <p>
                  <strong>Storyline: </strong>
                  { storyline }
                </p>
                <p>
                  <strong>Genre: </strong>
                  {genre}
                </p>
                <p>
                  <strong>Rating: </strong>
                  {rating}
                </p>
              </div>

              <div className="buttons-div">
                <Link
                  to="/"
                  className="buttons"
                >
                  VOLTAR
                </Link>

                <Link
                  to={ `/movies/${id}/edit` }
                  className="buttons"
                >
                  EDITAR
                </Link>

                <Link
                  to="/"
                  className="buttons"
                  onClick={ async () => movieAPI.deleteMovie(id) }
                >
                  DELETAR
                </Link>
              </div>
            </div>
          </div>)
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default MovieDetails;
