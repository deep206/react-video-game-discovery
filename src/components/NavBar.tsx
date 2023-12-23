import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";

const NavBar = () => {
    return (
        <HStack>
            <Image
                src={logo}
                boxSize="52px"
                border="solid 2px slateblue"
                borderRadius="15%"
                margin="1px"
                padding="1px"
            />
            <Text>Lorem, ipsum dolor.</Text>
        </HStack>
    );
};

export default NavBar;
