import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      id: 0,
      imagePath: '',
      title: '',
      subtitle: '',
      storyline: '',
      genre: '',
      rating: 0,
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie = async () => {
    const { match: { params } } = this.props;
    const movie = await movieAPI.getMovie(params.id);
    const { id, imagePath, title, subtitle, storyline, genre, rating } = movie;
    this.setState({
      loading: false,
      id,
      imagePath,
      title,
      subtitle,
      storyline,
      genre,
      rating,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const {
      loading, id, title, storyline, imagePath, genre, rating, subtitle } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details" className="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link exact to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = ({
  match: PropTypes.objectOf(PropTypes.string).isRequired,
});

export default MovieDetails;
