import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      {/* use {{}} for inline styling */}
      {/* different from regular HTML, camel-case attributes is used with JSX */}
      <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1>
    </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
