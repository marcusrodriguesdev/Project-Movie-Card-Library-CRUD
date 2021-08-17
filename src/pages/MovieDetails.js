import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const {
      match: { params: { id },
      } } = this.props;
    const data = await movieAPI.getMovie(id);
    this.fetchDetailsMovie(data);
  }

  fetchDetailsMovie = (request) => {
    this.setState({
      movie: request,
      loading: false,
    });
  }

deleteMovie = (id) => {
  movieAPI.deleteMovie(id);
}

render() {
  // Change the condition to check the state
  // if (true) return <Loading />;
  const { loading, movie: {
    title,
    storyline,
    imagePath, genre, rating, subtitle, id } } = this.state;

  if (loading) {
    return <Loading />;
  }

  return (
    <div data-testid="movie-details">
      <h1>{title}</h1>
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ title }</h4>
      </div>
      <p>{ `Subtitle: ${subtitle}` }</p>
      <p>{ `Storyline: ${storyline}` }</p>
      <p>{ `Genre: ${genre}` }</p>
      <p>{ `Rating: ${rating}` }</p>
      <div>
        <Link to="/">VOLTAR</Link>
        <Link
          to={ {
            pathname: `/movies/${id}/edit`,
            params: { id },
          } }
        >
          EDITAR
        </Link>
        <Link to="/" onClick={ () => { this.deleteMovie(id); } }>DELETAR</Link>
      </div>
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
