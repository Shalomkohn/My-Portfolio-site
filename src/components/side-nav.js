import { Link } from "react-router-dom"

const SideNav = (props) => {
    return(
        <div className={`${props.isVisible? 'sideNavShow sideNav': 'sideNav'} `}>
            <ul className="sideNavUl">
                <li className="contactMe"><Link to="/contact-me" className="btn" onClick={props.switchSideNavVisible}>CONTACT ME</Link></li>
                <li className="aboutMe"><Link to="/about-me" className="btn" onClick={props.switchSideNavVisible}>ABOUT ME</Link></li>
                <li className="myProjects"><Link to="/my-projects" className="btn" onClick={props.switchSideNavVisible}>MY PROJECTS</Link></li>
            </ul>
        </div>
    )
}

export default SideNav 