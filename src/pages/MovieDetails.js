import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    movieAPI.getMovie(id).then((response) => {
      this.setState({ movie: response, loading: false });
    });
  }

  deleteMovie = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    movieAPI.deleteMovie(id);
  };

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const {
      match: { url },
    } = this.props;

    if (loading === true) {
      return <Loading />;
    }

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`${url}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;
