import MenuAndCloseIcon from "./menu-&-close-icon"
import { Link } from "react-router-dom"

const NavBar = (props) => {

    return(
        <nav className="navBar">
            <ul className="navUl">
                <MenuAndCloseIcon onClick={props.switchSideNavVisible} isMenuIcon={props.isMenuIcon}/>
                <li className="contactMe liToggle"><Link to="/contact-me" className="btn">contact me</Link></li>
                <li className="aboutMe liToggle"><Link to="/about-me" className="btn">about me</Link></li>
                <li className="myProjects liToggle"><Link to="/my-projects" className="btn" >my projects</Link></li>
                <li className="websiteLogo liTogle"><Link to="/" className="btn" onClick={props.showSideNav && props.switchSideNavVisible}>Shalom.</Link></li>
            </ul>
        </nav>
    )   
}

export default NavBar