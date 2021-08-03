import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    // const movieId = this.props.match.params.id; must use destructuring :()
    const { match: { params: { id } } } = this.props;
    const movieId = id;
    // movieAPI returns a promise
    movieAPI.getMovie(movieId)
      .then((movieWithMatchingId) => {
        // console.log(movieWithMatchingId);
        this.setState({
          movie: movieWithMatchingId,
          loading: false,
        });
      });
  }

  render() {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    // const { storyline, imagePath, genre, rating, subtitle } = {};

    return (
      <div data-testid="movie-details">
        {loading
          ? <Loading />
          : (
            <div>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{ `Title: ${title}` }</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <div>
                <Link to="/">VOLTAR</Link>
              </div>
              <div>
                <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
              </div>
            </div>)}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
