import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import MainPage from "./pages/MainPage"
import Navbar from "./pages/Navbar"
import Portfolio from "./pages/Portfolio"
import Skills from "./pages/Skills"

export function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
