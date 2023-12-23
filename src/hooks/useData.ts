import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";

interface GetResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<GetResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch((err: AxiosError) => {
                if(err instanceof CanceledError) return;
                setLoading(false);
                setError(err.message);
            })

        return () => controller.abort();
    }, dependencies ? [...dependencies] : []);

    return { data, error, isLoading };
}

 export default useData;