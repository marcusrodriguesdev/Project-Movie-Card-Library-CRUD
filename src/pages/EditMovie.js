import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
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

    this.pegaFilmeParaEditar = this.pegaFilmeParaEditar.bind(this);
  }

  componentDidMount() {
    this.pegaFilmeParaEditar();
  }

  handleSubmit(updatedMovie) {
    // console.log(updatedMovie);
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async pegaFilmeParaEditar() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const filmeParaEditar = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: filmeParaEditar,
        });
      },
    );
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (loading) {
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

MovieCard.propTypes = {
  match: PropTypes.objectOf(PropTypes.number).isRequired,
  params: PropTypes.objectOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
};
