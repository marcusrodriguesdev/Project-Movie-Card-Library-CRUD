import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = ({
  title,
  children,
}) => (
  <header className="header-container">
    <div className="header-overlay" />
    <h1>{ title }</h1>
    { children }
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: '',
  children: undefined,
};

export default Header;
