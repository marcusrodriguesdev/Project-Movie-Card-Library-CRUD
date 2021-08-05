import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: [],
    };
  }

  componentDidMount() {
    this.fetchGetMovie();
  }

  fetchGetMovie = async () => {
    const object = await movieAPI.getMovie(1);

    this.setState({
      loading: false,
      movie: object,
    });
  }

  toLoad() {
    const { loading } = this.state;
    if (loading === true) {
      return(
        <div>
          <Loading />
        </div>
      )
    }
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    this.toLoad();

    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <h1>Detalhes: </h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

export default MovieDetails;
