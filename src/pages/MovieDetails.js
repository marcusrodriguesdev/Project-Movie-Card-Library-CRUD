import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    const { match: { params } } = this.props;
    const object = await movieAPI.getMovie(params.id);

    this.setState({
      loading: false,
      movie: object,
    });
  }

  render() {
    console.log(this.props);

    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        {
          loading ? <Loading /> : <div>
            <h1>Detalhes: </h1>
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`Title: ${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <p><Link to={`/movies/${id}/edit`}>EDITAR</Link></p>
            <p><Link to="/" >VOLTAR</Link></p>
          </div>
        }
      </div>
    );
  }
}

export default MovieDetails;
