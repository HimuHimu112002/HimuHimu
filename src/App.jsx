import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/FooterComponents"
import NavMenu from "./components/NavMenu"
import Project from "./components/Project"
import Skill from "./components/Skill"
import ScrollToTop from "react-scroll-to-top"
function App() {
  return (
    <>
      <ScrollToTop smooth/>
      <NavMenu/>
      <Banner/>
      <Skill/>
      <Experience/>
      {/* <Education/> */}
      <Contact/>
      <Project/>
      <Footer/>
    </>
  )
}

export default App
