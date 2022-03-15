import NavBar from "./components/nav-bar"
import SideNav from "./components/side-nav"
import ContactLogos from "./components/contact-logos"
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutMe from "./components/about-me"
import ContactMe from "./components/contact-me"
import MyProjects from "./components/my-projects"

const App = () => {

    const [showSideNav, setShowSidNav] = useState(false)

    const switchSideNavVisible = () => setShowSidNav(!showSideNav)

    return(
        <Router>
            <>
                <NavBar menuIcon={!showSideNav} switchSideNavVisible={switchSideNavVisible} showSideNav={showSideNav}/>
                {showSideNav && <SideNav switchSideNavVisible={switchSideNavVisible} />}
                <Routes>
                    <Route path="/" element={
                        <>
                            <div className="mainContentDiv">
                                <div className="my-pic"></div>
                                <div className="myDescriptionSurround">
                                    <div className="my-description">Hello, i'm Shalom.<br /><br />web designer,<br className="breakSometimesHide"/> web developer,<br />JavaScript,<br className="breakSometimesHide"/> react.js.
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
            </>
            <p className="copyWrite">Copyright &copy; 2022 Shalom Kohn</p>
        </Router>
    )
}

export default App