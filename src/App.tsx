import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`, //base for mobile
                lg: `"nav nav" "aside main"`, //for screens larger than 1024px
            }}
        >
            <GridItem area={"nav"}>
                <NavBar />
            </GridItem>
            <Show above="lg">
                <GenreList />
            </Show>
            <GridItem area={"main"}>
                <GameGrid />
            </GridItem>
        </Grid>
    );
}

export default App;
