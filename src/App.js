import { useState } from 'react';
import './App.css';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';
import options from './data/feedbackButtons.json';
import Section from './Components/Section/Section';
import Notification from './Components/Notification/Notification';

export default function App() {
  const [feedbackGood, setFeedbackGood] = useState(0);
  const [feedbackNeutral, setFeedbackNeutral] = useState(0);
  const [feedbackBad, setfeedbackBad] = useState(0);

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setFeedbackGood(prev => prev + 1);
        break;
      case 'neutral':
        setFeedbackNeutral(prev => prev + 1);
        break;
      case 'bad':
        setfeedbackBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return feedbackGood + feedbackNeutral + feedbackBad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? +((feedbackGood / total) * 100).toFixed() : 0;
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedbackGood}
            neutral={feedbackNeutral}
            bad={feedbackBad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
