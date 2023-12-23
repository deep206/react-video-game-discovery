import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
        <Card height="320px">
            <Skeleton></Skeleton>
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
};

export default GameCardSkeleton;
