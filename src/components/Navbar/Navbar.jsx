import { Link } from 'react-router-dom'
import Logo from '../../assets/logo1.png'

export default function Navbar() {
    return (
        <>
            <nav className="nav">
                <Link to="/" className="Logo"><div id="logo"><img src={Logo} alt="Jerry TCG Logo"/></div></Link>
                <ul>
                    <li>
                    <Link to="/" >Home</Link>
                    </li>

                    <li>
                        <Link to="/Products">Products</Link>
                    </li>

                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}