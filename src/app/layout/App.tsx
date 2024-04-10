import NavBar from "./nav/NavBar"
import Footer from "./nav/Footer"
import { Outlet } from "react-router-dom"
// import { Container } from "semantic-ui-react"

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
