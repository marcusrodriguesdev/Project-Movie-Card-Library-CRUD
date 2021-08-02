import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;
    this.state = {
      movie: '',
      status: 'loading',
      shouldRedirect: false,
      id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.FetchUpdate();
  }

  async handleSubmit(updatedMovie) {
    /**
 * Consultei o repositório do Lucas Caribé para resolver essa parte.
 * https://github.com/tryber/sd-013-b-project-movie-card-library-crud/blob/lucas-caribe-project-movie-card-library-crud/src/pages/EditMovie.js
 */
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
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
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
};
export default EditMovie;
