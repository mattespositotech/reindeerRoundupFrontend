import ImageWithContainer from "../containers/ImageWithContainer";
import { addParticipants, drawNames, exchangeGifts, sendInvites } from "../../content/HowItWorksContent";
import { howImage } from "../../content/HomePageContent";

export default function HowItWorksPage() {
    return (
        <div style={{ marginTop: '5em' }}>
            <ImageWithContainer imgUrl={howImage} content={addParticipants()} list />
            <ImageWithContainer imgUrl={howImage} content={sendInvites()} list />
            <ImageWithContainer imgUrl={howImage} content={drawNames()} list />
            <ImageWithContainer imgUrl={howImage} content={exchangeGifts()} list />
        </div>
    )
}