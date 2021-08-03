import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading, Touchable } from '../components';
import Detail from '../components/Detail';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    movieAPI.getMovie(id)
      .then((movie) => {
        this.setState({
          movie,
          isLoading: false,
        });
      });
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = () => {};
  }

  handleDelete(movieId) {
    movieAPI.deleteMovie(movieId);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, isLoading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <Detail title="Title" content={ title } />
        <Detail title="Subtitle" content={ subtitle } />
        <Detail title="Storyline" content={ storyline } />
        <Detail title="Genre" content={ genre } />
        <Detail title="Rating" content={ rating.toString() } />
        <Touchable type="button" to="/">
          VOLTAR
        </Touchable>
        <Touchable type="button" to={ `/movies/${id}/edit` }>
          EDITAR
        </Touchable>
        <Touchable type="button" to="/" onClick={ () => this.handleDelete(id) }>
          DELETAR
        </Touchable>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
