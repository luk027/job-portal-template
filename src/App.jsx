import CategoriesSection from "./components/CategoriesSection"
import EmployerPromotion from "./components/EmployerPromotion"
import FeaturedJobs from "./components/FeaturedJobs"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import {useMotionTemplate, useMotionValueEvent, useScroll} from "framer-motion"

function App() {
  const {scrollY} = useScroll();
  useMotionValueEvent(scrollY,"change",(latest) => {
    console.log("page scroll: ",latest)
  })

  return (
    <>
      <Navbar/>
      <Section1/>
      <Section2/>
      <CategoriesSection/>
      <FeaturedJobs/>
      <EmployerPromotion/>
      <Footer/>
    </>
  )
}

export default App
