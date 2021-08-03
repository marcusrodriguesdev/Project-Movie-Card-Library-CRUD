import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { params } = props.match;
    const { id } = params;
    this.state = {
      data: [],
      loading: true,
      id,
    };
  }

  async componentDidMount() {
    const { id } = this.state;
    const response = await movieAPI.getMovie(id);
    this.changeState(response);
  }

  changeState(data) {
    this.setState({
      loading: false,
      data,
    });
  }

  render() {
    const { id, data, loading } = this.state;
    const { title, storyline, imagePath, genre, rating,
      subtitle } = data;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading />
          : console.log(title)}
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <br />
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
};

export default MovieDetails;
