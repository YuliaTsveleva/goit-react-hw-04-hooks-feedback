import React from 'react';
import './Statistics.module.css';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import statisticsFields from '../../data/statisticsFields.json';

const Statistics = props => (
  <ul className={s.StatisticsList}>
    {statisticsFields.map(field => {
      if (field.name !== 'positive feedback') {
        const className =
          field.name.charAt(0).toUpperCase() + field.name.slice(1);
        console.log(className);

        return (
          <li key={field.id} className={s[className]}>
            {field.name}:<span>{props[field.name]}</span>
          </li>
        );
      } else {
        return (
          <li key={field.id} className={s.Percentage}>
            {field.name}:<span>{props.percentage}%</span>
          </li>
        );
      }
    })}
  </ul>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
