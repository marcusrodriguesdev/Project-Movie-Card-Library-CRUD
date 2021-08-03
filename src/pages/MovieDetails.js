import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
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
    const { props: { match: { params } } } = this.props;
    const data = await movieAPI.getMovie(params.id);
    const { title, storyline, imagePath, genre, rating, subtitle, id } = data;
    this.setState({
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
      loading: false,
    });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state;
    const { loading } = this.state;
    const details = (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>);
    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : details }
        <div>
          <Link to="/">
            VOLTAR
          </Link>
          <Link to={ `/movies/${id}/edit` }>
            EDITAR
          </Link>
        </div>

      </div>
    );
  }
}

MovieDetails.propTypes = ({
  props: PropTypes.objectOf(PropTypes.string),
}).isRequired;
