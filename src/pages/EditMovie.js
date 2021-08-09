import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    console.log(updatedMovie);
    const finalMovie = movieAPI.updateMovie(updatedMovie);
    console.log(finalMovie);
    this.setState({
      movie: updatedMovie,
      shouldRedirect: true,
    });
  }

  async fetchMovie() {
    // Fazer a requisição com getMovie()
    const { match } = this.props;
    console.log(match);
    const { id } = match.params;
    const returnedMovie = await movieAPI.getMovie(id)
      .then((data) => data);
    this.setState({
      movie: returnedMovie,
      status: 'done',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    // console.log(loading, movie);
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }),
};

EditMovie.defaultProps = {
  match: '1',
};

export default EditMovie;
