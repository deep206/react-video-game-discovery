import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`, //base for mobile
                lg: `"nav nav" "aside main"`, //for screens larger than 1024px
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar
                    onSearch={(searchText) =>
                        setGameQuery({ ...gameQuery, searchText })
                    }
                />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        selectedGenre={gameQuery.genre}
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genre })
                        }
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Flex flexWrap="wrap" paddingLeft={10} marginBottom={1}>
                    <Box marginRight={5} marginTop={1}>
                        <PlatformSelector
                            selectedPlatform={gameQuery.platform}
                            onPlatformSelect={(platform) =>
                                setGameQuery({ ...gameQuery, platform })
                            }
                        ></PlatformSelector>
                    </Box>
                    <Box marginTop={1}>
                        <SortSelector
                            selectedSortOrder={gameQuery.sortOrder}
                            onSortOrderSelect={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                        ></SortSelector>
                    </Box>
                </Flex>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
