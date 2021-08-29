import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

// Site consultado para a parte do Redirect
// https://dev.to/projectescape/programmatic-navigation-in-react-3p1l
class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requisition: false,
      movie: [],
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    getMovie(id).then((response) => this.handleState(response));
  }

  componentDidUpdate() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    await updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  handleState(movie) {
    this.setState({
      requisition: true,
      movie });
  }

  render() {
    const { requisition, movie, shouldRedirect } = this.state;
    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="edit-movie">
        { requisition === true ? <MovieForm
          movie={ movie }
          onSubmit={ this.handleSubmit }
        /> : <Loading /> }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
