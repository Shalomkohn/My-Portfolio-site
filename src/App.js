import NavBar from "./components/nav-bar"
import SideNav from "./components/side-nav"
import myPicture from "./my-picture.png"
import ContactLogos from "./components/contact-logos"
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
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
                                    <div className="my-pic">
                                        <h1>Hello,<br /> I'm Shalom.</h1>
                                    </div>
                                    <div className="my-description">
                                        web design,
                                        <br className="showOnMobile"/>
                                        <div className="hideOnMobile"> web development.</div>
                                        <div className="description-line-2">
                                            with passion and trust.
                                        </div>
                                    </div>
                                </div>
                                <ContactLogos />
                            </>}
                        />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/contact-me" element={<ContactMe />} />
                        <Route path="/my-projects" element={<MyProjects />} />
                    </Routes>
                    <footer className="footer">
                        <p className="copyWrite">Copyright &copy; 2022 Shalom Kohn</p>
                    </footer>
                </div>
            </>
        </Router>
    )
}

export default App