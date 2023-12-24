import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
    onPlatformSelect: (platform: Platform | null) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onPlatformSelect, selectedPlatform }: Props) => {
    const { data, error, isLoading } = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name ?? "All Platforms"}
            </MenuButton>
            <MenuList>
                {isLoading && <Spinner></Spinner>}
                {!isLoading && (
                    <MenuItem onClick={() => onPlatformSelect(null)}>
                        All Platforms
                    </MenuItem>
                )}
                {data.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onPlatformSelect(platform)}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
