import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);

    this.state = { redirect: false };
  }

  componentDidMount() {
    const p = this.props;
    const { id } = p.match.params;
    movieAPI.getMovie(id).then((response) => this.setState({ movie: response }));
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ redirect: true });
  }

  deleteClick(e) {
    e.preventDefault();

    const s = this.state;
    const { id } = s.movie;
    movieAPI.deleteMovie(id);
    this.setState({ redirect: true });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    let JSX;
    const s = this.state;

    if (s.redirect) return <Redirect to="/" />;

    if (s.movie) {
      const { title, storyline, imagePath, genre, rating, subtitle, id } = s.movie;

      JSX = (
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ this.deleteClick }>DELETAR</Link>
        </div>);
    } else { JSX = <Loading />; }

    return (

      <div data-testid="movie-details">
        {JSX}
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default MovieDetails;
