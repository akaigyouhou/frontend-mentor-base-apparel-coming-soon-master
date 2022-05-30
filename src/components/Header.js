import "./header.css";
import Logo from '../images/logo.svg';

function Header() {
    return (
        <header>
            <img src={Logo} alt="logo"></img>
        </header>
    );
}

export default Header;
