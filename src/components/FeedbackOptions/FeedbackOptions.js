import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ setGood, setNeutral, setBad }) {
  return (
    <div className={styles.options}>
      <button
        className={styles.goodBtn}
        type="button"
        onClick={() => setGood(prevState => prevState + 1)}
      >
        Good
      </button>
      <button
        className={styles.neutralBtn}
        type="button"
        onClick={() => setNeutral(prevState => prevState + 1)}
      >
        Neutral
      </button>
      <button
        className={styles.badBtn}
        type="button"
        onClick={() => setBad(prevState => prevState + 1)}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  setGood: PropTypes.func,
  setNeutral: PropTypes.func,
  setBad: PropTypes.func,
};
