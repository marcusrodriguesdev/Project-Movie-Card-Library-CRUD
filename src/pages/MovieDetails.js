import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.getMovie(id).then((iten) => {
      this.setState({
        movie: iten,
      });
    });
  }

  handleDelete = (id) => {
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const {
      title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (movie.length === 0) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{ `Title: ${title}` }</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <br />
        <Link to="/">VOLTAR</Link>
        <br />
        <Link to="/" onClick={ () => { this.handleDelete(id); } }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

MovieDetails.defaultProps = {
  match: undefined,
};

export default MovieDetails;
