import React from "react";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";

interface DynamicLoadIconSetsProps {
    iconSet: Record<string, React.FC<any>>;
    iconColor?: string;
    bgColor?: string;
    iconNameColor?: string;
}

const DynamicLoadIconSets: React.FC<DynamicLoadIconSetsProps> = ({
    iconSet,
    iconColor = "currentColor", 
    bgColor = "transparent", 
    iconNameColor = "inherit" 
}) => {
    const iconEntries = Object.entries(iconSet);

    return (
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
            {iconEntries.length > 0 ? (
                iconEntries.map(([iconName, IconComponent]) => (
                    <Box key={iconName} textAlign="center" h={"auto"} minH={"120px"} bg={bgColor} p={4} borderRadius={'lg'}>
                        <IconComponent width="50px" height="50px" color={iconColor} />
                        <Text fontSize={{base: 'sm', md: 'md'}} mt={2} fontWeight="bold" color={iconNameColor}>{iconName}</Text>
                    </Box>
                ))
            ) : (
                <Text>No icons found for this set.</Text>
            )}
        </SimpleGrid>
    );
};

export default DynamicLoadIconSets;
