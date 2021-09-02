import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      loading: true,
      movie: [],
    });
  }

  componentDidMount() {
    const last = document.URL.slice(document.URL.length - 1);
    getMovie(last).then((resolve) => this.setState({
      movie: resolve,
      loading: false,
    }));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        {loading
          ? <Loading />
          : <section>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <h1>{ `Subtitle: ${title}` }</h1>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <br />
            <Link to="/">VOLTAR</Link>
            <br />
            <Link to>DELETAR</Link>
          </section> }
      </div>
    );
  }
}
export default MovieDetails;
