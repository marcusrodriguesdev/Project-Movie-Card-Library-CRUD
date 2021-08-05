import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchGetMovie();
  }

  fetchGetMovie = async () => {
    const { match: { params } } = this.props;
    const object = await movieAPI.getMovie(params.id);
    this.setState({
      loading: false,
      movie: object,
    });
  }

  handleSubmit(updatedMovie) {

    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect

    }

    return (
      <div data-testid="edit-movie">
        {
          loading ? <Loading /> :
          <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        }
      </div>
    );
  }
}

export default EditMovie;
