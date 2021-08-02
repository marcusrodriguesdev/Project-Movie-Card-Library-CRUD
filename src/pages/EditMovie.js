import React, { Component } from 'react';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    // const { match: { params: { id } } } = this.props;
    this.state = {
      movie: '',
      status: 'loading',
      shouldRedirect: true,
      id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.FetchUpdate();
  }

  async handleSubmit(updatedMovie) {
    const blab = await movieAPI.updateMovie(updatedMovie);
    console.log(blab);
  }

  async FetchUpdate() {
    const { id } = this.state;
    this.setState({ status: 'loading' },
      async () => {
        const responseOfApi = await movieAPI.getMovie(id);
        this.setState({
          status: false,
          movie: responseOfApi,
        });
      });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
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

export default EditMovie;
