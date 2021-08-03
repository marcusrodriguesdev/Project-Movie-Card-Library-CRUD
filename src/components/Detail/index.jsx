import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Detail = ({
  title,
  content,
  ...rest
}) => (
  <fieldset { ...rest } className="detail-container">
    <div className="detail-overlay" />
    <legend>{title}</legend>
    <h3>{content}</h3>
  </fieldset>
);

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Detail;
