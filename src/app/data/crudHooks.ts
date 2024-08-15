import { useEffect, useState } from "react";
import { getData } from "./crudFunctions";

function useFetchData<T>(url: string) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const result = await getData<T>(url);
            setData(result);
            setLoading(false);
        }

        fetchData();
    }, [url]);

    return { data, loading };
}

export {useFetchData}