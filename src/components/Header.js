import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  // in order to make a good use of props, make function here rather than Button.js component
  const onClick = () => {
    console.log('Click');
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      {/* onClick as a prop */}
      {/* embed onClick prop is gonna call onClick func above */}
      <Button color='green' text='Add' onClick={onClick} />
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
