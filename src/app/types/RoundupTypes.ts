import { status as roundupStatus } from "../enums/RoundupEnums";
import { status as userStatus } from "../enums/UserEnums";

export interface Roundup {
  _id: string;
  participants: Participant[];
  blacklist: number[][];
  date: string;
  message: string;
  name: string;
  status: roundupStatus;
}

export interface Participant {
  id: number;
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
