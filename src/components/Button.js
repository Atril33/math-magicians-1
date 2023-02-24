import PropTypes from 'prop-types';

function Button(props) {
  const { label, className, onClick } = props;

  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: 'regular-btn',
  onClick: () => {},
};

export default Button;
