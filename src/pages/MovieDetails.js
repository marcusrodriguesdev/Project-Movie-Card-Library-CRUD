import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading: true,
    };

    this.setStateMovie = this.setStateMovie.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const objMovie = await getMovie(id);
    this.setStateMovie(objMovie);
  }

  setStateMovie(objMovie) {
    this.setState({ movie: objMovie });
    this.setState({ loading: false });
  }

  render() {
    const { loading, movie } = this.state;
    const { id, genre, imagePath, rating, storyline, subtitle, title } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        {loading && <Loading />}
        <Link to="/">VOLTAR</Link>
        <br />
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
