import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MovieForm } from '../components';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then((res) => {
      this.setState({
        status: 'ready',
        movie: res,
      });
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then((res) => {
      if (res === 'OK') {
        this.setState({
          shouldRedirect: true,
        });
      }
    });
  }

  render() {
    const { history } = this.props;
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      history.push('/');
    }

    return (
      <>
        { status === 'loading' && <Loading /> }
        { status === 'ready' && (
          <div data-testid="edit-movie">
            <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
          </div>
        )}
      </>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default EditMovie;
