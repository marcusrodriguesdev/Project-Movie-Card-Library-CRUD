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
      status: true,
    };
    this.removeMovie = this.removeMovie.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovies(id);
  }

  async fetchMovies(id) {
    const movies = await movieAPI.getMovie(id);
    this.setState({
      movie: movies,
      status: false,
    });
  }

  async removeMovie() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id)
      .then(() => {
        this.setState({
          status: false,
        });
      });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />
    const { status, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div>
        { status ? <Loading />
          : (
            <div data-testid="movie-details">
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{title}</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
              <Link to="/" onClick={ () => this.removeMovie() }>DELETAR</Link>
            </div>
          )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
