import { introImage, introText, howImage, howItWorks } from "../../content/HomePageContent";
import ImageWithContainer from "../containers/ImageWithContainer";

export default function HomePage() {
  return (
    <>
        <ImageWithContainer imgUrl={introImage} content={introText()} />
        <ImageWithContainer imgUrl={howImage} content={howItWorks()} reversed />
    </>
  )
}