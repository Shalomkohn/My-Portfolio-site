import MenuAndCloseIcon from "./menu-&-close-icon"
import { Link } from "react-router-dom"

const NavBar = ({ onClick, showSideNav, onMenuClick, closeHeight, menuHeight, showCloseIcon}) => {

    return(
        <nav className="navBar">
            <li className="websiteLogo liTogle"><Link to="/" className="btn" onClick={onClick}>Shalom Kohn</Link></li>
            <ul className="navUl">
                <li className="contactMe liToggle"><Link to="/contact-me" className="btn">contact me</Link></li>
                <li className="aboutMe liToggle"><Link to="/about-me" className="btn">about me</Link></li>
                <li className="myProjects liToggle"><Link to="/my-projects" className="btn" >my projects</Link></li>
                <MenuAndCloseIcon onClick={onClick} onMenuClick={onMenuClick} showSideNav={showSideNav} showCloseIcon={showCloseIcon} closeHeight={closeHeight} menuHeight={menuHeight}/>
            </ul>
        </nav>
    )   
}

export default NavBar