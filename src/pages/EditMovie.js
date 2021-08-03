import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      shouldRedirect: false,
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestMovie = this.requestMovie.bind(this);
  }

  componentDidMount() {
    this.requestMovie();
  }

  handleSubmit(updatedMovie) {
  }

  async requestMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const requesMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: requesMovie,
      status: false,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">

        {
          status ? <Loading />
            : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: propTypes.objectOf(
    propTypes.string,
    propTypes.number,
    propTypes.bool,
  ).isRequired,
};

export default EditMovie;
