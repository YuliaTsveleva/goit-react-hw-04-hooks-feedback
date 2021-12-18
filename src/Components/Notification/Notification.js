import React from 'react';
import PropTypes from 'prop-types';
import './Notification';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={s.Message}>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
