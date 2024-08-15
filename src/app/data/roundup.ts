import { Roundup, RoundupMinimal } from "../types/RoundupTypes";
import { saveData } from "./crudFunctions";
import { useFetchData } from "./crudHooks";

const baseUrl = "http://127.0.0.1:10000/";

function useGetRoundupsByUser(email: string) {
  const url = `${baseUrl}user/roundups?email=${email}`;
  return useFetchData<RoundupMinimal[]>(url);
}

function useGetRoundupById(id: string) {
  const url = `${baseUrl}roundup?id=${id}`;
  return useFetchData<Roundup>(url);
}

// add type for roundup on submit
// change to hook
async function addRoundupByUser(email: string, data: any) {
  const url = baseUrl + `roundup/add?email=${email}`;

  await saveData(url, data);
}

export { useGetRoundupsByUser, useGetRoundupById, addRoundupByUser };
