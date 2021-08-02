import React, { Component } from 'react';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    const { history } = this.props;
    movieAPI.updateMovie(updatedMovie)
      .then(history.push('/'));
  }

  fetchMovie = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.getMovie(id)
      .then((movie) => {
        this.setState({
          movie,
          loading: false,
        });
      });
  }

  render() {
    const { loading, movie } = this.state;
    const success = (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
    return (
      <div>
        { loading ? <Loading /> : success }
      </div>
    );
  }
}

export default EditMovie;
