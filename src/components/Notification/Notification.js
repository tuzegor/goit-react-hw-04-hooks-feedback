import styles from './Notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className={styles.message}>{message}</p>;
}

Notification.defaultProps = {
  message: 'No result',
};

Notification.propTypes = {
  message: PropTypes.string,
};
