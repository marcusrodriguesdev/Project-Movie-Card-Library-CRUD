import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/movieAPI';
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
    this.setStateMovie();
  }

  async setStateMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const objMovie = await getMovie(id);
    this.setState({ movie: objMovie });
    this.setState({ loading: false });
  }

  async deletarFilme(id) {
    await deleteMovie(id);
  }

  render() {
    const { loading, movie } = this.state;
    const { id, genre, imagePath, rating, storyline, subtitle, title } = movie;
    if (loading === true) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>

        <footer>
          <Link to="/">VOLTAR</Link>
          <br />
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <br />
          <Link to="/" onClick={ () => { this.deletarFilme(id); } }> DELETAR </Link>
        </footer>
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
