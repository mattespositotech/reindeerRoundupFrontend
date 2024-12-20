import { roundupLocalStorage } from "../../enums/RoundupEnums";
import { BlacklistForm } from "../../types/FormTypes";
import { Roundup } from "../../types/RoundupTypes";
import { loadStoredData } from "../../utils/Session";
import { useAddRoundupByUser } from "../roundup";

export function useSubmitRoundup(email: string) {
  const { mutate } = useAddRoundupByUser()

  const submitRoundup = async () => {
    const roundup: Partial<Roundup> = {};

    const keys = Object.keys(roundupLocalStorage);
    keys.forEach((key) => {
      roundup[key as keyof Roundup] = getInnerStoredDataByKey(key);
    });

    await mutate(email, roundup)
  }

  return { submitRoundup }
}

function getInnerStoredDataByKey(key: string) {
  if (key !== roundupLocalStorage.blacklists) {
    const storedData = loadStoredData(key);
    return storedData[key];
  } else {
    return convertBlacklistsToRoundupFormat();
  }
}

function convertBlacklistsToRoundupFormat() {
  const { masterBlacklist } = loadStoredData(roundupLocalStorage.blacklists);
  return masterBlacklist.map((subBlacklist: BlacklistForm) => {
    return subBlacklist.blacklist.map((entry) => entry.name);
  });
}
