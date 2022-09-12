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
                    <NavBar onClick={closeSlideNav} onMenuClick={handleMenuClick} {...theProps}/>
                    <SideNav onClick={closeSlideNav} isVisible={showSideNav}/>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <div className="mainContentDiv">
                                    <div className="black-box">
                                        <h1>Hello,<br /> I'm Shalom.</h1>
                                    </div>
                                    <div className="my-description">
                                        
                                        we<span className="colorSparkle1">b</span> de<span className="colorSparkle2">s</span>ign,<br />
                                        w<span className="colorSparkle2">e</span>b dev<span className="colorSparkle3">e</span>lo<span className="colorSparkle1">p</span>me<span className="colorSparkle2">n</span>t.
                                        <br />
                                        {/* <div className="description-line-2">
                                            with passion and trust.
                                        </div> */}
                                        <div className="cta-buttons-container">
                                            <button className="call-to-action-button cta-about-me">
                                                <Link to="/about-me" className="btn">about me</Link>
                                                <i class="fa-solid fa-chevron-right"></i>
                                            </button>
                                            <button className="call-to-action-button cta-contact-me">
                                                <Link to="/contact-me" className="btn">contact me</Link>
                                                <i class="fa-solid fa-chevron-right"></i>
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