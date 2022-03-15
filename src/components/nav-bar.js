import MenuAndCloseIcon from "./menu-&-close-icon"
import AboutMe from "./about-me"
import { Link } from "react-router-dom"

const NavBar = (props) => {

    return(
        <nav className="navBar">
            <ul className="navUl">
                <MenuAndCloseIcon onClick={props.switchSideNavVisible} icon={props.menuIcon}/>
                <li className="contactMe liToggle"><Link to="/contact-me" className="link">Contact Me</Link></li>
                <li className="aboutMe liToggle"><Link to="/about-me" className="link">About Me</Link></li>
                <li className="myProjects liToggle"><Link to="/my-projects" className="link" >My Projects</Link></li>
                <li className="websiteLogo liTogle"><Link to="/" className="link" onClick={props.showSideNav && props.switchSideNavVisible}>Shalom.</Link></li>
            </ul>
        </nav>
    )   
}

export default NavBar