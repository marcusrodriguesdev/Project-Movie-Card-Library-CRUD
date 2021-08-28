import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.requestMovie();
  }

  handleClick = async () => {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
  }

  requestMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);

    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div>
        {loading ? <Loading />
          : (
            <div data-testid="movie-details">
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{ `Title: ${title}` }</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link onClick={ this.handleClick } to="/">DELETAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>
          )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default MovieDetails;
