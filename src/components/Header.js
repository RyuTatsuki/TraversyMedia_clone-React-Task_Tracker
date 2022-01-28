import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      {/* pass in a styling variable declared below */}
      <h1 style={headingStyle}>{title}</h1>
    </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// rather than inline styling, variable can be declared
const headingStyle = {
  color: 'red',
  backgroundColor: 'black'
}

export default Header;
