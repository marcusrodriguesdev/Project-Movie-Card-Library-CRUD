import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: undefined,
      status: 'carregando',
    };

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: id } } = this.props;
    const movieData = await movieAPI.getMovie(parseInt(id.id, 10));
    console.log(movieData);
    this.setState({
      movie: movieData,
      status: 'carregado',
    });
  }

  render() {
    const { movie, status } = this.state; // desustruturar undefined

    if (status === 'carregando') {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <h1>{`Subtitle: ${movie.title}`}</h1>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = { match: PropTypes.oneOfType([PropTypes.object]).isRequired };
