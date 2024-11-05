import { useEffect, useState } from "react";
import { deleteAuthorizedData, getAuthorizedData, saveAuthorizedData } from "./crudFunctions";

function useFetchData<T>(url: string) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const result = await getAuthorizedData<T>(url);
            setData(result);
            setLoading(false);
        }

        fetchData();
    }, [url]);

    return { data, loading };
}

function useSaveData<T, U>() {
    const [loading, setLoading] = useState(false);
    const [returnData, setReturnData] = useState<U | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function save(url: string, data: T) {
        setLoading(true);
        setError(null);
        try {
            const response = await saveAuthorizedData<T, U>(url, data);
            setReturnData(response);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }

    return { save, loading, error, returnData };
}

function useDeleteData<U>() {
    const [loading, setLoading] = useState(false);
    const [returnData, setReturnData] = useState<U | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function deleteData(url: string) {
        setLoading(true);
        setError(null);
        try {
            const response = await deleteAuthorizedData<U>(url);
            setReturnData(response);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }

    return { deleteData, loading, error, returnData };
}

export {useFetchData, useSaveData, useDeleteData}