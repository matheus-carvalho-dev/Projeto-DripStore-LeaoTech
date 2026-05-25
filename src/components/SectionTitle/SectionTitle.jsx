import React from "react";
import styles from './SectionTitle.module.scss'
const SectionTitle = ({ text, className }) => {
  return <h2 className={`py-2 text-dark-gray-2 fw-bold ${styles.title} ${className}`}>{text}</h2>;
};

export default SectionTitle;
