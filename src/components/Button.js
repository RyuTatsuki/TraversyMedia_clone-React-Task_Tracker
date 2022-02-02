import PropTypes from 'prop-types';

// onClick props is caught up here from Header.js
const Button = ({ color, text, onClick }) => {
  return (
    <button
      // call onClick props and sent up to Header.js
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  // added PropType for onClick
  onClick: PropTypes.func
}

export default Button;
