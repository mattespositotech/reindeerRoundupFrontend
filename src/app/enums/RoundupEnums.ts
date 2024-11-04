export enum status {
  cancelled = -1,
  inProgress = 0,
  complete = 1,
  badMatches = 2
}

export enum statusDisplayName {
  'Cancelled' = -1,
  'Active' = 0,
  'Completed' = 1,
  'Bad Matches' = 2
}

export enum roundupLocalStorage {
  name = "name",
  participants = "participants",
  blacklists = "blacklists",
  date = "date",
  message = "message",
}
