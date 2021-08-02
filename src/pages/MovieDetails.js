import React, { Component } from 'react';

// import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: false,
  //   };
  // }

  // componentDidMount() {
  //   this.callMovies();
  // }

  //  callMovies = async () => {
  //    this.setState({
  //      loading: true,
  //    });

  //    this.setState({
  //      loading: false,
  //    });
  //  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    //  const { loading } = this.state;
    const { storyline, imagePath, genre, rating, subtitle } = {};

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

export default MovieDetails;
