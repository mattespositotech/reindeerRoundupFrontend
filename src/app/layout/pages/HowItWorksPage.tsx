import ImageWithContainer from "../containers/ImageWithContainer";
import { addParticipants, drawNames, exchangeGifts, sendInvites } from "../../content/HowItWorksContent";
import ParticipantsIcon from '../../../assets/ParticipantsIcon.png'
import InvitesIcon from '../../../assets/InvitesIcon.png'
import NamesIcon from '../../../assets/DrawnamesIcon.png'
import GiftsIcon from '../../../assets/GiftsIcon.png'

export default function HowItWorksPage() {
    return (
        <div style={{ marginTop: '5em' }}>
            <ImageWithContainer imgUrl={ParticipantsIcon} content={addParticipants()} list small />
            <ImageWithContainer imgUrl={InvitesIcon} content={sendInvites()} list small />
            <ImageWithContainer imgUrl={NamesIcon} content={drawNames()} list small />
            <ImageWithContainer imgUrl={GiftsIcon} content={exchangeGifts()} list small />
        </div>
    )
}