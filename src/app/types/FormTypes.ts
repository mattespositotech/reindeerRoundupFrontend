export interface ParticipantList {
  participants: ParticipantForm[];
}

export interface ParticipantForm {
  name: string;
  email: string;
}

export interface Options {
  text: string;
  value: string;
}

export interface BlacklistForm {
  blacklist: BlacklistFormItem[];
}

export interface BlacklistFormItem {
  email: string;
}
