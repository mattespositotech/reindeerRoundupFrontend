import { aboutUsText } from "../../content/AboutPageContent";
import { introImage } from "../../content/HomePageContent";
import ImageWithContainer from "../containers/ImageWithContainer";

export default function AboutUsPage() {
    return (
        <ImageWithContainer imgUrl={introImage} content={aboutUsText()} />
    )
}