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
    this.requiredMovie = this.requiredMovie.bind(this);
  }

  componentDidMount() {
    this.loadMovie();
  }

  async loadMovie() {
    const { id } = this.state;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
    });
  }

  async delete() {
    const { id } = this.state;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, loading, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <main>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <Link to={ `${id}/edit` }> EDITAR </Link>
        <Link to="/"> VOLTAR </Link>
        <Link to="/" onClick={ this.deletar }>DELETAR</Link>
        <p>{loading ? <Loading /> : '' }</p>
      </main>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape,
  params: PropTypes.shape,
  id: PropTypes.string,
}.isRequired;

export default MovieDetails;
