import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";



export default function Footer(){
    return(
        <>

        <footer>
                <div className="container">
                    <div className="footer-container">
                        <div className="socials">
                            <a target="_blank" href="https://www.linkedin.com/in/jerry-castro-luz/"><FontAwesomeIcon icon={faLinkedin}/></a>

                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>

                            <a href="https://github.com/JerryC2005" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>

                        <div className="links">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2024 TCG Jerry. All Rights Reserved.</p>
                    </div>
            </div>
            </footer>
        
        </>

    )
}
