import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
    this.requisition = this.requisition.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.requisition();
  }

  async requisition() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const response = await movieAPI.getMovie(id);
    if (response) {
      this.setState({
        movie: response,
        loading: false,
      });
    }
  }

  delete() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    movieAPI.deleteMovie(id);
  }

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { loading, movie } = this.state;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading === true) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.delete }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }),
  }).isRequired,
};

export default MovieDetails;
