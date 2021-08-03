import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../App.css';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.requisitionMovie();
  }

  deleteMovie = async () => {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
  }

  requisitionMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const requisition = await movieAPI.getMovie(id);
    this.setState({
      movie: requisition,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie: { id, title, storyline,
      imagePath, genre, rating, subtitle }, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div className="card-details" data-testid="movie-details">
        <img className="image-details" alt="Movie Cover" src={ `../${imagePath}` } />
        <div>
          <div className="info-details">
            <p className="title-details">{ `Title: ${title}` }</p>
            <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
          </div>
          <div className="Rating">
            <p className="rating">{ `Rating: ${rating}` }</p>
          </div>
          <div className="button-details">
            <Link className="bottons" to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link className="bottons" to="/">VOLTAR</Link>
            <Link className="bottons" to="/" onClick={ this.deleteMovie }>DELETAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
