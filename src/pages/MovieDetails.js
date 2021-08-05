import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;
    this.state = {
      movie: {},
      loading: true,
      id,
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleDelete() {
    const { id } = this.state;
    movieAPI.deleteMovie(id);
  }

  async fetchMovie() {
    const { id } = this.state;
    const movieObj = await movieAPI.getMovie(id);
    this.setState((prevState) => ({
      loading: !prevState,
      movie: movieObj,
    }));
  }

  render() {
    const { movie: {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle }, loading } = this.state;

    if (loading) {
      return (<Loading />);
    } return (
      <div data-testid="movie-details" className="movie-details-div">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="btns-div">
          <button type="button"><Link to="/">VOLTAR</Link></button>
          <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
          <button
            type="button"
            onClick={ this.handleDelete }
          >
            <Link to="/">DELETAR</Link>
          </button>
        </div>
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
