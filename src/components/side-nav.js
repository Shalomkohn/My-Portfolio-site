import { Link } from "react-router-dom"

const SideNav = ({onClick, isVisible}) => {
    return(
        <div className={`${isVisible? 'sideNavShow sideNav': 'sideNav'} `}>
            <ul className="sideNavUl">
                <li className="contactMe"><Link to="/contact-me" className="btn" onClick={onClick}>CONTACT ME</Link></li>
                <li className="aboutMe"><Link to="/about-me" className="btn" onClick={onClick}>ABOUT ME</Link></li>
                <li className="myProjects"><Link to="/my-projects" className="btn" onClick={onClick}>MY PROJECTS</Link></li>
            </ul>
        </div>
    )
}

export default SideNav 