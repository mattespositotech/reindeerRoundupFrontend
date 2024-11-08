import { AddBlacklist, AddParticipant, Resend, Roundup, RoundupMinimal, UpdateEmail } from "../types/RoundupTypes";
import { useDeleteData, useFetchData, useSaveData } from "./crudHooks";
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

function useResend() {
  const {
    save,
    loading,
    returnData: data,
  } = useSaveData<Resend, string>();

  const mutate = async (resend: Resend) => {
    const url = createUrl('/roundup/participant/reinvite')
    await save(url, resend );
  };

  return { mutate, loading, data };
}

function useUpdateEmail() {
  const {
    save,
    loading,
    returnData: data,
  } = useSaveData<UpdateEmail, string>();

  const mutate = async (updateEmail: UpdateEmail) => {
    const url = createUrl('/roundup/participant/update')
    await save(url, updateEmail );
  };

  return { mutate, loading, data };
}


function useDeleteParticipant() {
  const {
    deleteData,
    loading,
    returnData: data,
  } = useDeleteData<string>();

  const deleteParticipant = async (roundupId: string, participantId: string) => {
    const url = createUrl(`/roundup/participant/delete?id=${roundupId}&uuid=${participantId}`)
    await deleteData(url );
  };

  return { deleteParticipant, loading, data };
}

function useAddBlacklist() {
  const {
    save,
    loading,
    returnData: data,
  } = useSaveData<AddBlacklist, string>();

  const mutate = async (addBlacklist: AddBlacklist) => {
    const url = createUrl('/roundup/blacklist/add')
    await save(url, addBlacklist );
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
  useAddParticipant,
  useResend,
  useUpdateEmail,
  useDeleteParticipant,
  useAddBlacklist
};
