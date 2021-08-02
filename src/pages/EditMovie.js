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
      status: '',
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.requisitionMovie();
  }

  handleSubmit = async (updatedMovie) => {
    const requestMovie = await movieAPI.updateMovie(updatedMovie);
    this.setState({
      status: requestMovie,
    });
  }

  requisitionMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const requisition = await movieAPI.getMovie(id);
    this.setState({
      movie: requisition,
      loading: false,
    });
  }

  render() {
    const { status, loading, movie } = this.state;
    if (status === 'OK') return <Redirect to="/" />;
    if (loading) return <Loading />;
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
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
