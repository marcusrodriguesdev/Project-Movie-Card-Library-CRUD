import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      loading: true,
    };
    this.requestMovie = this.requestMovie.bind(this);
  }

  componentDidMount() {
    this.requestMovie();
  }

  async requestMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true },
      async () => {
        const request = await movieAPI.getMovie(id);
        this.setState({
          movie: request,
          loading: false,
        });
      });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      !loading ? (
        <div data-testid="movie-details">
          <h1>{ `Title: ${title}` }</h1>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <br />
          <Link to={ `/movies/${id}/delete` }>DELETAR</Link>
          <br />
          <Link to="/">VOLTAR</Link>
        </div>
      ) : <Loading />
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
