import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      movie: [],
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({ isLoading: true }, async () => {
      await movieAPI.getMovie(id)
        .then((response) => {
          this.setState({ movie: response }, () => {
            this.setState({ isLoading: false });
          });
        });
    });
  }

  render() {
    const { isLoading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match: { params: { id } } } = this.props;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Título: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
