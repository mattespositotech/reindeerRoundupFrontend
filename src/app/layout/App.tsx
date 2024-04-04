import { Container } from "semantic-ui-react"
import ImageWithContainer from "./containers/ImageWithContainer"
import NavBar from "./nav/NavBar"
import Footer from "./nav/Footer"
import { howItWorks, introText, introImage, howImage } from '../../content/HomePageContent'

function App() {

  return (
    <>
      <NavBar />
      <Container className="main">
        <ImageWithContainer imgUrl={introImage} content={introText()} />
        <ImageWithContainer imgUrl={howImage} content={howItWorks()} reversed />
      </Container>
      <Footer />
    </>
  )
}

export default App
