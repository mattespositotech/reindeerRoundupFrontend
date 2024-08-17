import { roundupLocalStorage } from "../../enums/RoundupEnums";
import { BlacklistForm } from "../../types/FormTypes";
import { Roundup } from "../../types/RoundupTypes";
import { loadStoredData } from "../../utils/Session";
import { addRoundupByUser } from "../roundup";

export function submitRoundup(email: string) {
  const roundup: Partial<Roundup> = {};

  const keys = Object.keys(roundupLocalStorage);
  keys.forEach((key) => {
    roundup[key as keyof Roundup] = getInnerStoredDataByKey(key);
  });

  addRoundupByUser(email, roundup as Roundup)
}

function getInnerStoredDataByKey(key: string) {
  if (key !== roundupLocalStorage.blacklist) {
    const storedData = loadStoredData(key);
    return storedData[key];
  } else {
    return convertBlacklistsToRoundupFormat();
  }
}

function convertBlacklistsToRoundupFormat() {
  const { masterBlacklist } = loadStoredData(roundupLocalStorage.blacklist);
  return masterBlacklist.map((subBlacklist: BlacklistForm) => {
    return subBlacklist.blacklist.map((entry) => entry.email);
  });
}
