import PropTypes from 'prop-types';

const Screen = ({ value, onValueChange }) => {
  const handleChange = (e) => {
    onValueChange(e.target.value);
  };

  return (
    <input type="text" value={value} className="screen" onChange={handleChange} />
  );
};

Screen.propTypes = { value: PropTypes.string, onValueChange: PropTypes.func.isRequired };
Screen.defaultProps = { value: '0' };

export default Screen;
