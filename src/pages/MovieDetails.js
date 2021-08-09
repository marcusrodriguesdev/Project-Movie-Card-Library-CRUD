import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    // Fazer a requisição com getMovie()
    const destructuredProps = this.props;
    const { id } = destructuredProps.match.params;
    console.log(destructuredProps);
    this.setState(
      { loading: true },
      async () => {
        const info = await movieAPI.getMovie(id)
          .then((data) => data);
        // console.log(info);
        this.setState({
          movie: info,
          loading: false,
        });
      },
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, loading } = this.state;
    // console.log(`movie = ${movie}`);

    return (
      <div data-testid="movie-details">
        <p>{ `title: ${movie.title}` }</p>
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        { loading ? <Loading /> : console.log('AAAA') }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }),
};

MovieDetails.defaultProps = {
  match: '1',
};

export default MovieDetails;
