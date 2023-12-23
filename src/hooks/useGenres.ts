import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
}

interface GetGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<GetGenresResponse>(`/genres`, { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch((err: AxiosError) => {
                if(err instanceof CanceledError) return;
                setLoading(false);
                setError(err.message);
            })

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading };
}

 export default useGenres;