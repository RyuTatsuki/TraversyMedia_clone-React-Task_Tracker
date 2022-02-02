import PropTypes from 'prop-types';

// example of reusable Button component
const Button = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: color }} className='btn'>
      {text}
    </button>
  );
}

// set defaultProps
Button.defaultProps = {
  color: 'steelblue'
}

// set propTypes
// LOWER CAMEL
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default Button;
