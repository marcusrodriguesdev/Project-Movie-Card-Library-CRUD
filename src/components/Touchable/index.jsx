import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

const Touchable = ({
  children,
  to,
  type,
  ...rest
}) => (
  <Link className={ type } to={ to } { ...rest }>
    { children }
  </Link>
);

Touchable.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['link', 'button']).isRequired,
};

Touchable.defaultProps = {
  children: [],
};

export default Touchable;
