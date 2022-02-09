import PropTypes from 'prop-types';
import Button from './Button';

// prop onAdd is passed in
// prop showAdd is passed in
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      {/* onClick is gonna call onAdd prop */}
      {/* made color and text dynamic with ternary operator */}
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
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
