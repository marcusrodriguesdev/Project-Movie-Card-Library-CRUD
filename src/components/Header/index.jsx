import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = ({
  title,
  children,
}) => (
  <header className="header-container">
    <div className="header-overlay" />
    <Link to="/">
      <h1>{ title }</h1>
    </Link>
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
