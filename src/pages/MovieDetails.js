import React from 'react';
import PropyTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    // movieAPI.getMovie().then((movie) => this.setState({  }));
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
    });
  };

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (loading) {
      return <Loading />;
    }
    const del = () => { movieAPI.deleteMovie(id); };
    console.log(this.props);
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{`Title: ${title}`}</h2>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ del }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propyTypes = {
  match: PropyTypes.shape({
    params: PropyTypes.shape({
      id: PropyTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
