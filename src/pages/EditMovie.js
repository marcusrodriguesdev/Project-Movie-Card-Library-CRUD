import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.requestAPi();
  }

  handleSubmit = async (updatedMovie) => {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  requestAPi = async () => {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { status, shouldRedirect, movie, loading } = this.state;
    console.log(movie);
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        {loading ? <Loading />
          : (<MovieForm movie={ movie } onSubmit={ this.handleSubmit } />)}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default EditMovie;
