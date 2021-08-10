import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { match } = this.props;
    const data = await movieAPI.getMovie(match.params.id);
    if (data) {
      this.setState({ movie: data, loading: false });
    }
  }

  deleteMovie = () => {
    const { movie } = this.state;
    movieAPI.deleteMovie(movie.id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    const { match } = this.props;

    if (loading === true) {
      return <Loading />;
    }

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${match.params.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
