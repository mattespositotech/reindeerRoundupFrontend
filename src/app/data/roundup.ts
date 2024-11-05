import { AddParticipant, Roundup, RoundupMinimal } from "../types/RoundupTypes";
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

function useAddRoundupByUser() {
  const {
    save,
    loading,
    returnData: data,
  } = useSaveData<Partial<Roundup>, string>();

  const mutate = async (email: string, roundup: Partial<Roundup>) => {
    const url = createUrl(`roundup/add?email=${email}`)
    await save(url, roundup );
  };

  return { mutate, loading, data };
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

function useAddParticipant() {
  const {
    save,
    loading,
    returnData: data,
  } = useSaveData<AddParticipant, string>();

  const mutate = async (addParticipant: AddParticipant) => {
    const url = createUrl('roundup/participant/add')
    await save(url, addParticipant );
  };

  return { mutate, loading, data };
}

export {
  useGetRoundupsByUser,
  useGetRoundupById,
  useAddRoundupByUser,
  useUpdateParticipantToAccepted,
  useUpdateParticipantToDecline,
  useSetAllParticipantsToAccepted,
  useLaunchRoundup,
  useAddParticipant
};
