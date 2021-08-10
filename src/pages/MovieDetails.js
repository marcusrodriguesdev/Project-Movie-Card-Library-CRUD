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
    this.deleteMovie = this.deleteMovie.bind(this);
    this.requestDetailApi = this.requestDetailApi.bind(this);
  }

  componentDidMount() {
    this.requestDetailApi();
  }

  async requestDetailApi() {
    const { match: { params: { id } } } = this.props;
    //  console.log(id);
    const data = await movieAPI.getMovie(id);
    this.setState({
      movie: data,
      loading: false,
    });
  }

  async deleteMovie() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change  the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const nowloading = <Loading />;
    return (
      <div data-testid="movie-details">
        {loading
          ? nowloading
          : (
            <div>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <div>
                <p>{ `Title: ${title}` }</p>
                <p>{ `Subtitle: ${subtitle}` }</p>
                <p>{ `Storyline: ${storyline}` }</p>
                <p>{ `Genre: ${genre}` }</p>
                <p>{ `Rating: ${rating}` }</p>
                <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
                <Link to="/">VOLTAR</Link>
                <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
              </div>
            </div>
          )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieDetails;
