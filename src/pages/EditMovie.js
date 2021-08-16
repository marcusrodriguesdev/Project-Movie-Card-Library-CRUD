import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.pullMovie();
  }

  async handleSubmit(updatedMovie) {
    await updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async pullMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await getMovie(id);
    this.setState({
      status: 'Ok',
      movie,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
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
  match: PropTypes.objectOf().isRequired,
};

export default EditMovie;
