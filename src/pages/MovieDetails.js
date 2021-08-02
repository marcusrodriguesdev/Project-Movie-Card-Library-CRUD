import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: [],
    };
  }

  componentDidMount() {
    this.callMovies();
  }

  callMovies = async () => {
    const { match } = this.props;
    const { getMovie } = movieAPI;
    this.setState({
      loading: true,
    });
    const actualMovie = await getMovie(match.params.id)
      .then((result) => result);
    this.setState({
      movie: actualMovie,
      loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        {
          loading
            ? <Loading />
            : (
              <div>
                <div>
                  <img alt="Movie Cover" src={ `../${imagePath}` } />
                  <p>{ `Tittle: ${title}` }</p>
                  <p>{ `Subtitle: ${subtitle}` }</p>
                  <p>{ `Storyline: ${storyline}` }</p>
                  <p>{ `Genre: ${genre}` }</p>
                  <p>{ `Rating: ${rating}` }</p>
                </div>
                <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
                <Link to="/">VOLTAR</Link>
              </div>
            )
        }
      </div>
    );
  }
}

export default MovieDetails;
