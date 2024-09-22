import React from "react";
import ClosableBox from "../generalUtils/ClosableBox";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import DynamicLoadIconSets from "./DynamicLoadIconSets";
import * as Icons01 from '../../components/iconsUtils/JayEyecons01/index01';
import * as Icons02 from '../../components/iconsUtils/JayEyecons02/index02';
import * as Icons03 from '../../components/iconsUtils/JayEyecons03/index03';

const iconSets = [
  { title: "JayEyecons Set 01 (Solid Fill)", icons: Icons01 },
  { title: "JayEyecons Set 02 (Outline)", icons: Icons02 },
  { title: "JayEyecons Set 03 (Solid/Outline Hybrid)", icons: Icons03 },
];

const JayEyeconsSetsDisplay = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={8}
      p={4}
      bg="brand.900"
      
      borderRadius="lg"
    >
      {iconSets.map(({ title, icons }) => (
        <ClosableBox
          key={title}
          title={title}
          buttonText={title}
          boxShadow={false}
          iconOpen={<ChevronUpIcon />}
          iconClosed={<ChevronDownIcon />}
          bgColor="brand.900"
          buttonbgColor="brand.900"
          titleColor="brand.700"
          titleSize="2xl"
        >
          <Box>
            <DynamicLoadIconSets iconSet={icons} bgColor="brand.900" iconColor="brand.700" iconNameColor="brand.500" />
          </Box>
        </ClosableBox>
      ))}
    </SimpleGrid>
  );
};

export default JayEyeconsSetsDisplay;
