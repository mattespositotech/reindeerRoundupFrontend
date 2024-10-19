import NavBar from "./nav/NavBar"
import Footer from "./nav/Footer"
import { Outlet } from "react-router-dom"
import { Container } from "semantic-ui-react"
import { UserProvider } from "../context/userContext"

function App() {

  return (
    <>
      <UserProvider>
        <NavBar />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </UserProvider>
    </>
  )
}

export default App
