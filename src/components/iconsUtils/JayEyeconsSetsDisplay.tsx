import React from "react";
import ClosableBox from "../generalUtils/ClosableBox";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";


const JayEyeconsSetsDisplay = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={8}
      p={4}
      bg="brand.900"
      color="white"
      borderRadius="lg"
    >
      <ClosableBox
        title="JayEyecons Set 01"
        buttonText="JayEyecons Set 01"
        boxShadow={false}
        iconOpen={<ChevronUpIcon />}
        iconClosed={<ChevronDownIcon />}
      >
        <Box>
          <Text>Coming Soon!</Text>
        </Box>
        <Box>
          <Text>Coming Soon!</Text>
        </Box>
        <Box>
          <Text>Coming Soon!</Text>
        </Box>
        <Box>
          <Text>Coming Soon!</Text>
        </Box>
      </ClosableBox>

      <ClosableBox
        title="JayEyecons Set 02"
        buttonText="JayEyecons Set 02"
        boxShadow={false}
        iconOpen={<ChevronUpIcon />}
        iconClosed={<ChevronDownIcon />}
      >
        <Box>
          <Text>Coming Soon!</Text>
        </Box>
      </ClosableBox>

      <ClosableBox
        title="JayEyecons Set 03"
        buttonText="JayEyecons Set 03"
        boxShadow={false}
        iconOpen={<ChevronUpIcon />}
        iconClosed={<ChevronDownIcon />}
      >
        <Box>
          <Text>Coming Soon!</Text>
        </Box>
      </ClosableBox>
    </SimpleGrid>
  );
};

export default JayEyeconsSetsDisplay;
