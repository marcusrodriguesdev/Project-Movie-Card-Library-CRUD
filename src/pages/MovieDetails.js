import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.requestMovie = this.requestMovie.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.requestMovie();
  }

  async requestMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const fetchMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: fetchMovie,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const movieId = `/movies/${id}/edit`;

    return (
      <div data-testid="movie-details">

        {
          loading ? <Loading className="loading" />
            : (
              <div>
                <img alt="Movie Cover" src={ `../${imagePath}` } />
                <p>{ `Title: ${title}` }</p>
                <p>{ `Subtitle: ${subtitle}` }</p>
                <p>{ `Storyline: ${storyline}` }</p>
                <p>{ `Genre: ${genre}` }</p>
                <p>{ `Rating: ${rating}` }</p>
                <Link to="/">VOLTAR</Link>
                <Link to={ movieId }>EDITAR</Link>
              </div>)
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.objectOf(
    propTypes.number,
    propTypes.string,
  ).isRequired,
};

export default MovieDetails;
