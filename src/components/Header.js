import PropTypes from 'prop-types'
// don't forget to import created new component
import Button from './Button';

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      {/* <Button></Button> also works*/}
      <Button />
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
