import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
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

  async handleSubmit(updatedMovie) {
    const update = await movieAPI.updateMovie(updatedMovie);

    this.setState({
      shouldRedirect: true,
      movie: update,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect - source: https://pt.stackoverflow.com/a/369899
      return <Redirect to="/" />
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
