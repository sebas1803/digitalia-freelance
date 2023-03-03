import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <a href="https://github.com/sebas1803" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sebastian-alfaro-mendoza/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <p>© 2023 Sebastian Alfaro, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;