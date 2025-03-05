import logo from '../../assets/icon/Logo.svg';
import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <a href="https://betalent.tech/">
        <img src={logo} alt="BeTalent Logo" />
      </a>
    </header>
  );
}

export default Header;
