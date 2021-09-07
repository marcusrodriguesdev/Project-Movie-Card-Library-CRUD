import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      loading: true,
      movie: [],
    });
    this.deleteMovies = this.deleteMovies.bind(this);
  }

  componentDidMount() {
    const last = document.URL.slice(document.URL.length - 1);
    getMovie(last).then((resolve) => this.setState({
      movie: resolve,
      loading: false,
    }));
  }

  deleteMovies() {
    const last = document.URL.slice(document.URL.length - 1);
    deleteMovie(last).then();
    console.log(deleteMovie(last).then());
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        {loading
          ? <Loading />
          : <section>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <h1>{ `Title: ${title}` }</h1>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <br />
            <Link to="/">VOLTAR</Link>
            <br />
            <Link to="/" onClick={ this.deleteMovies }>DELETAR</Link>
          </section> }
      </div>
    );
  }
}
export default MovieDetails;
