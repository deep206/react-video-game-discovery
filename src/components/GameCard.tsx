import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import RatingEmoji from "./RatingEmoji";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <>
            <Card>
                <Image src={getCroppedImageUrl(game.background_image)}></Image>
                <CardBody>
                    <HStack marginBottom={3} justifyContent="space-between">
                        <PlatformIconList
                            platforms={game.parent_platforms.map(
                                (p) => p.platform
                            )}
                        ></PlatformIconList>
                        <CriticScore score={game.metacritic}></CriticScore>
                    </HStack>
                    <Heading fontSize="2xl">
                        {game.name} <RatingEmoji rating={game.rating_top} />
                    </Heading>
                </CardBody>
            </Card>
        </>
    );
};

export default GameCard;
