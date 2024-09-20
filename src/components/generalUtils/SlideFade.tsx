import React, { useState } from "react";
import { SlideFade, Box, Button, Flex } from "@chakra-ui/react";

interface SlideFadeProps {
  texts: React.ReactNode[];
  buttonLabel: string;
  iconClosed?: React.ReactElement;
  iconOpen?: React.ReactElement;
  color?: string;
  bgColor?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  boxShadow?: string;
  offsetX: string;
  offsetY: string;
  width?: string;
}

const SlideFadeComponent = ({
  texts,
  buttonLabel,
  iconClosed,
  iconOpen,
  color,
  bgColor,
  fontSize,
  fontWeight,
  margin,
  boxShadow,
  offsetX,
  offsetY,
  width
}: SlideFadeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Flex direction="column" w="100%" h="auto">
      <Button
        onClick={handleToggle}
        rightIcon={isOpen ? iconOpen : iconClosed}
        color={color}
        bgColor={bgColor}
        fontSize={fontSize}
        fontFamily={'Sofadi One, sans-serif'}
        fontWeight={fontWeight}
        m={margin}
        boxShadow={boxShadow}
        w="100%"
        h="60px"
      >
        {buttonLabel}
      </Button>
      <SlideFade
        in={isOpen}
        reverse={!isOpen}
        transition={{ enter: { duration: 0.5 }, exit: { duration: 0.5 } }}
        offsetX={offsetX}
        offsetY={offsetY}
      >
        <Box w="100%" minH="100px" textAlign="center"> {/* Set a min height for consistency */}
          {texts.map((text, index) => (
            <Box key={index} >
              {text}
            </Box>
          ))}
        </Box>
      </SlideFade>
    </Flex>
  );
};

export default SlideFadeComponent;
