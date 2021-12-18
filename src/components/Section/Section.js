import React from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </>
  );
}

Section.defaultProps = {
  title: 'Section title',
};

Section.propTypes = {
  title: PropTypes.string,
};
