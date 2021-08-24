import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movie: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const movie = movieAPI.getMovie(id)
      .then((movie) => (this.setState({movie})))
      .then(() => (this.setState({isLoading: false})));
  }

  render() {

    const { isLoading } = this.state;
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (isLoading) {
      return (
        <Loading />
      );
    }

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { id } = this.props.match.params;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button><Link to="/">VOLTAR</Link></button>
        <br />
        <button><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
      </div>
    );
  }
}

export default MovieDetails;
