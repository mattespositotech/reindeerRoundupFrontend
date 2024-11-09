import NavBar from "./nav/NavBar"
import Footer from "./nav/Footer"
import { Outlet } from "react-router-dom"
import { Container } from "semantic-ui-react"
import { UserProvider } from "../context/userContext"

function App() {

  return (
    <>
      <UserProvider>
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
          <NavBar />
          <Container style={{flex: 1, marginTop: '5em'}}>
            <Outlet />
          </Container>
          <Footer />
        </div>
      </UserProvider>
    </>
  )
}

export default App
