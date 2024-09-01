import { Roundup, RoundupMinimal } from "../types/RoundupTypes";
import { saveData } from "./crudFunctions";
import { useFetchData, useSaveData } from "./crudHooks";

const baseUrl = "http://127.0.0.1:10000/";

function useGetRoundupsByUser(email: string) {
  const url = `${baseUrl}user/roundups?email=${email}`;
  return useFetchData<RoundupMinimal[]>(url);
}

function useGetRoundupById(id: string) {
  const url = `${baseUrl}roundup?id=${id}`;
  return useFetchData<Roundup>(url);
}

// change to hook
async function addRoundupByUser(email: string, data: Roundup) {
  const url = baseUrl + `roundup/add?email=${email}`;

  await saveData(url, data);
}

function useUpdateParticipantToAccepted() {
  const {
    save,
    loading,
    returnData: data,
  } = useSaveData<{ id: string; uuid: string }, string>();

  const mutate = async (id: string, uuid: string) => {
    const url = baseUrl + "roundup/participant/accept";
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
    const url = baseUrl + "roundup/participant/decline";
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
    const url = baseUrl + "roundup/participants/allToAccepted";
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
    const url = baseUrl + "roundup/launch";
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
