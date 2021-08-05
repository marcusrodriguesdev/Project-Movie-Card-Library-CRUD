import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    // console.log(id) // = id of the edited movie;
    movieAPI.getMovie(id)
      .then((movieGotById) => {
        this.setState({
          movie: movieGotById,
          isLoading: false,
        });
      });
  }

  async handleSubmit(updatedMovie) {
    console.log(updatedMovie);
    await movieAPI.updateMovie(updatedMovie);
    // .then(() => {
    // console.log(result) // = 'OK';
    // });
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;

    return (
      <div className="movie-card-list" data-testid="edit-movie">
        {shouldRedirect
          ? <Redirect to="/" />
          : null}
        {isLoading
          ? <Loading />
          : (
            <div className="form">
              <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
            </div>) }
      </div>
    );
  }
}

// Another way:
// const whatIsShouldRedirect = (shouldRedirect) => { switch(shouldRedirect) {
//   case true:
//     return <Redirect to="/" />;
//     break;
//   case false:
//     return status === 'loading' ? <Loading />
//     : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
// }
// }

// return (
//   <div data-testid="edit-movie">
//     {whatIsShouldRedirect(shouldRedirect)}
//   </div>
// );
// }

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
