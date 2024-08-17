export enum status {
  cancelled = -1,
  inProgress = 0,
  complete = 1,
}

export enum statusDisplayName {
  'Cancelled' = -1,
  'Active' = 0,
  'Completed' = 1
}

export enum roundupLocalStorage {
  name = "name",
  participants = "participants",
  blacklist = "blacklist",
  date = "date",
  message = "message",
}
