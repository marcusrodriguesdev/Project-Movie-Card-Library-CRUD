import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  async componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;

    this.setState({
      loading: true,
      id,
    });
    const Movie = await movieAPI.getMovie(id);

    this.setState({
      movie: [Movie],
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, loading } = this.state;
    const { id } = this.state;
    if (movie !== undefined && loading === false) {
      const { title, storyline, imagePath, genre, rating, subtitle } = movie[0];

      console.log(movie[0]);

      return (
        <div>

          <div data-testid="movie-details">

            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Title: ${title}` }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
          </div>
          <div>
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>

          </div>

        </div>
      );
    }
    return (
      <div>

        <Loading />
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>

      </div>
    );
  }
}

/*
  Erros de lint !
  consultei o stackoverflow
  https://stackoverflow.com/questions/47519612/eslint-match-is-missing-in-props-validation-react-prop-types/47519751

*/

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,

    }).isRequired,

  }).isRequired,

};

MovieDetails.propTypes = {

};

export default MovieDetails;
