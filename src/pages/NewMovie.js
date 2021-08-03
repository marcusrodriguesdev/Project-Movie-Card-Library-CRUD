import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   title: '',
    //   subtitle: '',
    //   imagePath: '',
    //   storyline: '',
    //   genre: '',
    //   rating: '',
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(prop) {
    this.setState({
      [prop.target.name]: prop.target.value,
    });
  }

  handleSubmit(newMovie) {
    newMovie.preventDefault();
    // const { title } = props.state;
    console.log(MovieForm);
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
