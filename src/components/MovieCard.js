import React from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="MovieImage" />
        <h1>{ title }</h1>
        <p>{ storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = ({
  movies: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }),
}).isRequired;
