import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { match: { params } } = this.props;
    const movie = await movieAPI.getMovie(params.id);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    const deleteMovie = () => { movieAPI.deleteMovie(id); };

    if (loading) {
      return <Loading />;
    }

    return (
      !loading ? (
        <div data-testid="movie-details" className="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h1>{ `Title: ${title}` }</h1>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link
            to="/"
            onClick={ deleteMovie }
          >
            DELETAR
          </Link>
          <Link to="/">VOLTAR</Link>
        </div>
      ) : <Loading />
    );
  }
}

MovieDetails.propTypes = ({
  match: PropTypes.objectOf(PropTypes.string).isRequired,
});

export default MovieDetails;
