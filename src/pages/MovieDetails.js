import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import EditMovie from './EditMovie';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      movie: [],
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { id } = this.props.match.params;
    this.setState({ isLoading: true }, async () => {
      await movieAPI.getMovie(id)
        .then((response) => {
          this.setState({ movie: response }, () => {
            this.setState({ isLoading: false });
          });
        });
    });
  }

  render() {
    const { isLoading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { id } = this.props.match.params;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Título: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
