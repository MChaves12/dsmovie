import { ReactComponent as IconeGithub } from '../../acets/img/Vector.svg';
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1> DsMovie </h1>
          <a href="https://github.com/MChaves12">
            <div className="dsmovie-contact-container">
              <IconeGithub />
              <p className="dsmovie-contact-link"> /MChaves12</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
