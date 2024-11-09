import { status as roundupStatus } from "../enums/RoundupEnums";
import { status as userStatus } from "../enums/UserEnums";
import { ParticipantForm } from "./FormTypes";

export interface Roundup {
  _id: string;
  participants: Participant[];
  blacklists: Blacklist[];
  date: string;
  message: string;
  name: string;
  status: roundupStatus;
  matches?: Matches;
}

export interface Blacklist {
  uuid: string;
  blacklist: string[];
}

export interface Matches {
  [key: string]: string;
}

export interface Participant {
  uuid: string;
  name: string;
  email: string;
  status: userStatus;
}

export interface RoundupMinimal {
  name: string;
  date: string;
  status: roundupStatus;
  _id: string;
}

export interface ParticipantDictionary {
  [email: string]: string;
}
// move to form types
export interface AddParticipant {
  id: string;
  participant: ParticipantForm;
}

export interface Resend {
  id: string;
  email: string;
}

export interface UpdateEmail {
  id: string;
  part_id: string;
  email: string;
}

export interface AddBlacklist {
  id: string;
  blacklist: string[];
}

export interface EditBlacklist {
  id: string;
  blacklist: Blacklist;
}