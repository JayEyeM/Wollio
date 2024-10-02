import React, { useState } from "react";
import ClosableBox from "../generalUtils/ClosableBox";
import { Box, SimpleGrid, Input, FormControl, FormLabel } from "@chakra-ui/react";
import DynamicLoadIconSets from "./DynamicLoadIconSets";
import * as Icons01 from '../../components/iconsUtils/JayEyecons01/index01';
import * as Icons02 from '../../components/iconsUtils/JayEyecons02/index02';
import * as Icons03 from '../../components/iconsUtils/JayEyecons03/index03';

import { EyeClosedIcon02, EyeOpenIcon02 } from "../../components/iconsUtils/JayEyecons02/index02";

const iconSets = [
  { title: "JayEyecons Set 01 (Solid Fill)", icons: Icons01 },
  { title: "JayEyecons Set 02 (Outline)", icons: Icons02 },
  { title: "JayEyecons Set 03 (Solid/Outline Hybrid)", icons: Icons03 },
];



const IconSetDisplay: React.FC<{ title: string; icons: Record<string, React.FC<any>> }> = ({ title, icons }) => {
  const [bgColor, setBgColor] = useState("brand.900");
  const [iconColor, setIconColor] = useState("brand.700");

  return (
    <ClosableBox
      title={title}
      buttonText={title}
      boxShadow={false}
      iconOpen={<Icons03.EyeOpenIcon03  mt={4} ml={4} />}
      iconClosed={<Icons03.EyeClosedIcon03 mt={4} ml={4} />}
      bgColor="brand.900"
      buttonbgColor="brand.900"
      titleColor="brand.700"
      titleSize="2xl"
    >
      {/* Color Inputs */}
      <Box mb={4} w="100%"  display={"flex"} flexDir={"row"} justifyContent={"center"} alignItems={"flex-end"} gap={4} >
        <FormControl mb={2} display={"flex"} flexDir={"column"}   alignItems={"center"} w={"40%"} >
          <FormLabel>Background Color</FormLabel>
          <Input
          
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </FormControl>
        <FormControl mb={2} display={"flex"} flexDir={"column"} alignItems={"center"} w={"40%"} >
          <FormLabel>Icon Color</FormLabel>
          <Input
          
            type="color"
            value={iconColor}
            onChange={(e) => setIconColor(e.target.value)}
          />
        </FormControl>
      </Box>

      {/* Display Icon Set */}
      <Box>
        <DynamicLoadIconSets
          iconSet={icons}
          bgColor={bgColor}
          iconColor={iconColor}
          iconNameColor={iconColor}
        />
      </Box>
    </ClosableBox>
  );
};

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
        <IconSetDisplay key={title} title={title} icons={icons} />
      ))}
    </SimpleGrid>
  );
};

export default JayEyeconsSetsDisplay;
