import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`, //base for mobile
                lg: `"nav nav" "aside main"`, //for screens larger than 1024px
            }}
        >
            <GridItem area={"nav"} bg="red">
                nav
            </GridItem>
            <Show above="lg">
                <GridItem area={"aside"} bg="yellow">
                    aside
                </GridItem>
            </Show>
            <GridItem area={"main"} bg="green">
                main
            </GridItem>
        </Grid>
    );
}

export default App;
