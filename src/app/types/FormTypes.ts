export interface ParticipantList {
  participants: ParticipantForm[];
}

export interface ParticipantForm {
  name: string;
  email: string;
}

export interface BlacklistForm {
  blacklist: BlacklistFormItem[];
}

export interface BlacklistFormItem {
  email: string;
}
