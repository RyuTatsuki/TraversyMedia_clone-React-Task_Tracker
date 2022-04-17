// to prevent page reload, use Link instead of a tag
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <Link to="/about">About</Link>
    </footer>
  );
}

export default Footer;
