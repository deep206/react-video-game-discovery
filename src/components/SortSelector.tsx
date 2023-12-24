import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSortOrderSelect: (sortOrder: string) => void;
    selectedSortOrder: string;
}

const SortSelector = ({ onSortOrderSelect, selectedSortOrder }: Props) => {
    const sortOptions = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ];

    const currentSortOrder = sortOptions.find(
        (option) => option.value === selectedSortOrder
    );

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder?.label ?? "Relevance"}
            </MenuButton>
            <MenuList>
                {sortOptions.map((option) => (
                    <MenuItem
                        onClick={() => onSortOrderSelect(option.value)}
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
