import { Link } from 'react-router-dom';
import "../Styles/HeaderStyle.css";

function Header() {
    return(
        <header className="root">
            <Link to="/" style={{ textDecoration: 'none'}}>
                <h1 className="logo"> Github Tweet</h1>
            </Link>
        </header>
    )
}

export default Header;