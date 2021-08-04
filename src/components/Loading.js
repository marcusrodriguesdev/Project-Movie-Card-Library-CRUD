import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="div-container">
          <div className="fake-div" />
          <div className="fake-div" />
          <div className="fake-div" />
          <div className="fake-div" />
        </div>
        <span>Carregando...</span>
      </div>
    );
  }
}

export default Loading;
