import { Roundup, RoundupMinimal } from "../types/RoundupTypes";
import { saveData } from "./crudFunctions";
import { useFetchData, useSaveData } from "./crudHooks";
import createUrl from "./utils/createUrl";

function useGetRoundupsByUser(email: string) {
  const url = createUrl(`user/roundups?email=${email}`)
  return useFetchData<RoundupMinimal[]>(url);
}

function useGetRoundupById(id: string) {
  const url = createUrl(`roundup?id=${id}`)
  return useFetchData<Roundup>(url);
}

// change to hook
async function addRoundupByUser(email: string, data: Roundup) {
  const url = createUrl(`roundup/add?email=${email}`)

  await saveData(url, data);
}

function useUpdateParticipantToAccepted() {
  const {
    save,
    loading,
    returnData: data,
  } = useSaveData<{ id: string; uuid: string }, string>();

  const mutate = async (id: string, uuid: string) => {
    const url = createUrl('roundup/participant/accept')
    await save(url, { id, uuid });
  };

  return { mutate, loading, data };
}

function useUpdateParticipantToDecline() {
  const {
    save,
    loading,
    returnData: data,
  } = useSaveData<{ id: string; uuid: string }, string>();

  const mutate = async (id: string, uuid: string) => {
    const url = createUrl('roundup/participant/decline')
    await save(url, { id, uuid });
  };

  return { mutate, loading, data };
}

function useSetAllParticipantsToAccepted() {
  const {
    save,
    loading,
    returnData: data,
  } = useSaveData<{ id: string }, string>();

  const mutate = async (id: string) => {
    const url = createUrl('roundup/participants/allToAccepted')
    await save(url, { id });
  };

  return { mutate, loading, data };
}

function useLaunchRoundup() {
  const {
    save,
    loading,
    returnData: data,
  } = useSaveData<{ id: string }, string>();

  const mutate = async (id: string) => {
    const url = createUrl('roundup/launch')
    await save(url, { id });
  };

  return { mutate, loading, data };
}

export {
  useGetRoundupsByUser,
  useGetRoundupById,
  addRoundupByUser,
  useUpdateParticipantToAccepted,
  useUpdateParticipantToDecline,
  useSetAllParticipantsToAccepted,
  useLaunchRoundup,
};
