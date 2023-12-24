import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <HStack>
            <Switch
                colorScheme="orange"
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
            />
            <MdDarkMode />
        </HStack>
    );
};

export default ColorModeSwitch;
