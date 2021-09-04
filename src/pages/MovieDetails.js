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
      loading: false,
    };
  }

  componentDidMount() {
    this.loadMovieDetail();
  }

  deleteActualMovie = async () => {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(Number(id));
  }

  loadMovieDetail = async () => {
    this.setState({ loading: true });
    const { match: { params: { id } } } = this.props;
    const data = await movieAPI.getMovie(Number(id));
    this.setState({
      movie: data,
      loading: false,
    });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading === true) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <nav className="detail-buttons">
          <Link
            style={
              { textDecoration: 'none', color: 'rgb(247, 153, 14)' }
            }
            to="/"
          >
            VOLTAR
          </Link>
          <br />
          <Link
            style={
              { textDecoration: 'none', color: 'rgb(247, 153, 14)' }
            }
            to={ `/movies/${Number(id)}/edit` }
          >
            EDITAR
          </Link>
          {/* <Link
            style={
              { textDecoration: 'none', color: 'rgb(247, 153, 14)' }
            }
            to={ {
              pathname: `/movies/${Number(id)}/edit`,
              selectedMovie: movie,
            } }
          >
            EDITAR
          </Link> */}
          <br />
          <Link
            style={
              { textDecoration: 'none', color: 'red' }
            }
            to="/"
            onClick={ this.deleteActualMovie }
          >
            DELETAR
          </Link>
        </nav>
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
