import { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood(prevState => prevState + 1);
  };
  const incrementNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };
  const incrementBad = () => {
    setBad(prevState => prevState + 1);
  };

  const total = good + neutral + bad;

  const positivePercentage = () => {
    return good > 0 ? Math.round((good * 100) / total) : 0;
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          incrementGood={incrementGood}
          incrementNeutral={incrementNeutral}
          incrementBad={incrementBad}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}
