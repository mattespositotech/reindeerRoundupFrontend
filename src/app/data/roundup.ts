import { useEffect, useState } from "react";
import { RoundupMinimal } from "../types/RoundupTypes";
import { getData, saveData } from "./crud";

const baseUrl = "http://127.0.0.1:10000/";

function useGetRoundupsByUser(email: string) {
  const [loading, setLoading] = useState(false);
  const [roundups, setRoundups] = useState<RoundupMinimal[]>([]);
  const url = baseUrl + `roundup?email=${email}`;

  useEffect(() => {
    async function fetchRoundups() {
      setLoading(true);
      const data = await getData<RoundupMinimal[]>(url);
      setRoundups(data);
      setLoading(false);
    }

    fetchRoundups();
  }, [url]);

  return { roundups, loading };
}

// add type for roundup on submit
// change to hook
async function addRoundupByUser(email: string, data: any) {
  const url = baseUrl + `roundup/add?email=${email}`;

  await saveData(url, data);
}

export { useGetRoundupsByUser, addRoundupByUser };
