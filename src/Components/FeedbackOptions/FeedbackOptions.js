import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={s.FeedbackButtonList}>
        {options.map(elem => {
          const name = elem.name.charAt(0).toUpperCase() + elem.name.slice(1);
          return (
            <li key={elem.id} className={s.FeedbackListItem}>
              <button
                type="button"
                onClick={onLeaveFeedback}
                className={s[name]}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
