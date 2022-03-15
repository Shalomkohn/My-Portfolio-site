import { Link } from "react-router-dom"

const SideNav = (props) => {
    return(
        <div className="sideNav">
            <ul className="sideNavUl">
                <li className="contactMe"><Link to="/contact-me" className="link" onClick={props.switchSideNavVisible}>CONTACT ME</Link></li>
                <li className="aboutMe"><Link to="/about-me" className="link" onClick={props.switchSideNavVisible}>ABOUT ME</Link></li>
                <li className="myProjects"><Link to="/my-projects" className="link" onClick={props.switchSideNavVisible}>MY PROJECTS</Link></li>
            </ul>
        </div>
    )
}

export default SideNav 