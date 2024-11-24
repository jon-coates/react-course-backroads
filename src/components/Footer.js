import Pagelinks from "./Pagelinks";
import Sociallinkgroup from "./Sociallinkgroup";

const Footer = () => {
  return (
    <footer className='section footer'>
      <Pagelinks parentClass='footer-links' itemClass='footer-link' />
      <Sociallinkgroup parentClass='footer-icons' itemClass='footer-icon' />

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
