import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({
  incrementGood,
  incrementNeutral,
  incrementBad,
}) {
  return (
    <div className={styles.options}>
      <button
        className={styles.goodBtn}
        type="button"
        onClick={() => incrementGood()}
      >
        Good
      </button>
      <button
        className={styles.neutralBtn}
        type="button"
        onClick={() => incrementNeutral()}
      >
        Neutral
      </button>
      <button
        className={styles.badBtn}
        type="button"
        onClick={() => incrementBad()}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  incrementGood: PropTypes.func,
  incrementNeutral: PropTypes.func,
  incrementBad: PropTypes.func,
};
