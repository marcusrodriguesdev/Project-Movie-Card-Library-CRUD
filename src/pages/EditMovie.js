import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import MovieList from './MovieList';
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
    const { match: { params: { id } } } = this.props;
    this.fetchRequisition(id);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async fetchRequisition(params) {
    this.setState({ loading: true },
      async () => {
        const resolve = await movieAPI.getMovie(params);
        const { movie } = this.state;
        this.setState({
          loading: false,
          movie: Object.assign(resolve, movie),
        });
      });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div data-testid="edit-movie">
        {
          loading
            ? <Loading />
            : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        }
      </div>
    );
  }
}

export default EditMovie;
