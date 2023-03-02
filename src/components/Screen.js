import PropTypes from 'prop-types';
import styles from '../styles/Calculator.module.css';

const Screen = ({ value, onValueChange }) => {
  const handleChange = (e) => {
    onValueChange(e.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} className={styles.screen} />
  );
};

Screen.propTypes = { value: PropTypes.string, onValueChange: PropTypes.func.isRequired };
Screen.defaultProps = { value: '0' };

export default Screen;
