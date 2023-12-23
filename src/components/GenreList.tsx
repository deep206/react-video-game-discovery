import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
    const { genres, error, isLoading } = useGenres();
    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GenreList;
