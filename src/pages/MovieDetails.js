import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import EditMovie from './EditMovie';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id)
      .then((response) => {
        this.setState({ movie: response });
      });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match } = this.props;
    const { id } = match.params;

    if (movie.length === 0) {
      return <Loading />;
    }

    return (
      <Router>
        <div data-testid="movie-details">
          <h1>{ `Title: ${title}` }</h1>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Route
            path={ `/movies/${id}/edit` }
            render={ () => <EditMovie name={ id } /> }
          />
        </div>
      </Router>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetails;
