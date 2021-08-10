import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    const loading = 'Carregando...';
    this.state = {
      componenteMontou: false,
      title: loading,
      subtitle: loading,
      storyline: loading,
      imagePath: loading,
      genre: loading,
      rating: loading,
    };
  }

  // Criar uma função que vai receber esse id de acordo com o link e passar pro getmovie, e então passar essa função para o didMount, que vai executar essa função
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchRequisition(id);
  }

  fetchRequisition = (id) => {
    const { getMovie } = movieAPI;
    getMovie(id).then((response) => {
      console.log(this);
      this.setState({
        componenteMontou: true,
        title: response.title,
        subtitle: response.subtitle,
        storyline: response.storyline,
        imagePath: response.imagePath,
        genre: response.genre,
        rating: response.rating,
      });
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      componenteMontou,
    } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <div data-testid="movie-details">
        { componenteMontou ? null : <Loading /> }
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">
          VOLTAR
        </Link>
        <br />
        <Link to={ `${id}/edit` }>
          EDITAR
        </Link>
        <br />
        <Link to="/">
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
};
