import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="404-error">
        <h1>Página não encontrada</h1>
        <img src="images/chucknorris.png" alt="Not Found" />
        Image by
        {' '}
        <a
          href="https://dribbble.com/kunchevsky"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alex Kunchevsky
        </a>
      </div>
    );
  }
}

export default NotFound;
