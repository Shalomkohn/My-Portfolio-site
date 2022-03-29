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

    const toggleSlideNav = () => {
        if(showSideNav){
            setCloseHeight(37)
            setMenuHeight(0)
        }else if(!showSideNav){
            setCloseHeight(0)
            setMenuHeight(37)
        }
        setTimeout(()=>{
            setShowSideNav(false)
        },.70)
    }
    const onMenuClick = () => {
        toggleSlideNav()
        setTimeout(()=>{
            setShowSideNav(true)
        },.72)
    }
    
    let footerHeight;
    if(window.innerWidth < 900){
        footerHeight = window.innerHeight - 745;
    }else {
        footerHeight = 0;
    }

    
    return(
        <Router>
            <>
                <NavBar onClick={toggleSlideNav} onMenuClick={onMenuClick} showSideNav={showSideNav} menuHeight={menuHeight} closeHeight={closeHeight}/>
                <SideNav onClick={toggleSlideNav} isVisible={showSideNav}/>
                <Routes>
                    <Route path="/" element={
                        <>
                            <div className="mainContentDiv">
                                <div className="my-pic" style={{backgroundImage: `url(${myPicture})`}}></div>
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
            <footer className="footer" style={{height: footerHeight }}>
                <p className="copyWrite">Copyright &copy; 2022 Shalom Kohn</p>
            </footer>
        </Router>
    )
}

export default App