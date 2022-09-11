import NavBar from "./components/nav-bar"
import SideNav from "./components/side-nav"
import ContactLogos from "./components/contact-logos"
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import AboutMe from "./components/about-me"
import ContactMe from "./components/contact-me"
import MyProjects from "./components/my-projects"

const App = () => {

    const [showSideNav, setShowSideNav] = useState(false)
    const [closeHeight, setCloseHeight] = useState(0)
    const [menuHeight, setMenuHeight] = useState(37)
    const [showCloseIcon, setShowCloseIcon] = useState(false)

    const theProps = {
        showSideNav,
        closeHeight,
        menuHeight,
        showCloseIcon,

    }

    const closeSlideNav = () => {
        setMenuHeight(37)
        setCloseHeight(0)
        setShowSideNav(false)
        setTimeout(()=>{
            setShowCloseIcon(false)
        },37)
    }
    const handleMenuClick = () => {
        setCloseHeight(37)
        setMenuHeight(0)
        setShowSideNav(true)
        setTimeout(()=>{
            setShowCloseIcon(true)
        },37)
    }

    return(
        <Router>
            <>
                <div className="backgroundColor">
                    <div className="overlay-right"></div>
                    <div className="overlay-top"></div>
                    <div className="overlay-bottom"></div>
                    <NavBar onClick={closeSlideNav} onMenuClick={handleMenuClick} {...theProps}/>
                    <SideNav onClick={closeSlideNav} isVisible={showSideNav}/>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <div className="mainContentDiv">
                                    <div className="hero-box-1">
                                        <h1>
                                            Hello,<br />
                                            <span className="short-text">My name's Shalom.</span>
                                            <span className="long-text">My name's Shalom.</span>
                                        </h1>
                                    </div>
                                    <div className="hero-box-2">
                                        {/* <h2>I'm a nice guy <br /> and a Web Developer</h2> */}
                                        <h2 className="long-text">I'm a nice guy<br />And i'm a Web Developer</h2>
                                        <div className="callToAction">
                                            <button className="aboutMe">
                                                <Link to="/about-me" className="btn">
                                                    <span className="short-text">About Me </span>
                                                    <span className="long-text">More about me </span>
                                                    <i class="fa-solid fa-user"></i>
                                                </Link>
                                            </button>
                                            <button className="contactMe">
                                                <Link to="/contact-me" className="btn">
                                                    <span>Contact Me </span>
                                                    <i className="fa-solid fa-comment"></i>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                  
                                </div>
                                <ContactLogos />
                                <footer className="footer">
                                    <p className="copyWrite">Copyright &copy; 2022 Shalom Kohn</p>
                                </footer>   
                            </>}
                        />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/contact-me" element={<ContactMe />} />
                        <Route path="/my-projects" element={<MyProjects />} />
                    </Routes>
                </div>
            </>
        </Router>
    )
}

export default App