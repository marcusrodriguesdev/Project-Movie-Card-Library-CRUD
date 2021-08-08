import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requisitIdEdit = this.requisitIdEdit.bind(this);
  }

  componentDidMount() {
    this.requisitIdEdit();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async requisitIdEdit() {
    const { match: { params: id } } = this.props;
    const respons = await movieAPI.getMovie(parseInt(id.id, 10));
    this.setState({
      movie: respons,
      status: 'carregado',
    });
  }

  render() {
    console.log('meu compnente ', this.state);
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
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
  match: PropTypes.oneOfType([PropTypes.object])
    .isRequired,
};

export default EditMovie;
