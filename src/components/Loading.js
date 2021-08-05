import React, { Component } from 'react';
// import { Header } from '.';

class Loading extends Component {
  render() {
    return (
      <div className="movie-list-menu">
        {/* <Header /> */}
        <div className="loading">Carregando...</div>
      </div>

    );
  }
}

export default Loading;
