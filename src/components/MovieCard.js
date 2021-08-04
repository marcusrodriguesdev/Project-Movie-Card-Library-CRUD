import React from 'react';

class MovieCard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div data-testid="movie-card">
        {this.props}
      </div>
    );
  }
}

export default MovieCard;
