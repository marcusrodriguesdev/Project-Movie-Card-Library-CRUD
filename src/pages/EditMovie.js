import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { MovieForm, Loading } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.setStateMovie = this.setStateMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const objMovie = await getMovie(id);
    this.setStateMovie(objMovie);
  }

  async handleSubmit(updatedMovie) {
    this.setState({ movie: updatedMovie });
    const { movie } = this.state;
    const promise = await updateMovie(movie);
    console.log(promise);
    this.setState({ shouldRedirect: true });
  }

  setStateMovie(objMovie) {
    this.setState({ movie: objMovie });
    this.setState({ status: '' });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      return (
        <Redirect to="/" />
      );
    }
    if (status === 'loading') {
      return (
        <div data-testid="edit-movie">
          <Loading />
        </div>
      );
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
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
