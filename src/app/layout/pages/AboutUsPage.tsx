import { aboutUsText } from "../../content/AboutPageContent";
import ImageWithContainer from "../containers/ImageWithContainer";
import Friends from '../../../assets/christmas_friends.png'

export default function AboutUsPage() {
    return (
        <ImageWithContainer imgUrl={Friends} content={aboutUsText()} />
    )
}