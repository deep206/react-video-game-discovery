import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    const badgeColorScheme =
        score > 75 ? "green" : score > 50 ? "yellow" : "red";
    return (
        <Badge
            fontSize="14px"
            paddingX={2}
            colorScheme={badgeColorScheme}
            borderRadius="4px"
        >
            {score}
        </Badge>
    );
};

export default CriticScore;
