import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface GetGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const controller = new AbortController();
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<GetGamesResponse>(`/games`, { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results);
            })
            .catch((err: AxiosError) => {
                if(err instanceof CanceledError) return;
                setError(err.message);
            });
    }, []);

    return { games, error, cancel: () => controller.abort() };
}

 export default useGames;