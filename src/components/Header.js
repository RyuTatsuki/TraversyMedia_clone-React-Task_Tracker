import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

// commented out for avoiding defaultProps to get the result of comment below
// Header.defaultProps = {
//   title: 'Task Tracker'
// }

// chaining isRequired to make sure a warning is shown if the prop isn't provided
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
