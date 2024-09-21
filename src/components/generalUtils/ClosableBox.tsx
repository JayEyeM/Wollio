import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { CloseIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { u } from 'framer-motion/client';

interface ClosableBoxProps {
  title: string;
  buttonText?: string;
  iconOpen?: React.ReactNode;  
  iconClosed?: React.ReactNode; 
  singleIcon?: React.ReactNode;  
  children: React.ReactNode;
  boxShadow?: boolean;
}

const ClosableBox: React.FC<ClosableBoxProps> = ({
  title,
  buttonText,
  children,
  boxShadow = true,
  iconOpen = undefined,
  iconClosed = undefined, 
  singleIcon,  
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Box>
      <Box
        bg={"brand.900"}
        boxShadow={boxShadow ? "rgba(0, 0, 0, 0.35) 0px 5px 15px;" : "none"}
        borderRadius="lg"
        p={4}
        mt={4}
        position="relative"
        minW={"200px"}
        maxW={"100%"}
        w={"auto"}
        minH={"100px"}
        ml={{ base: 'auto', md: 0 }}
        mr={{ base: 'auto', md: 0 }}
        display={'flex'}
        flexDirection={{ base: 'column', md: 'column' }}
        justifyContent={{ base: 'center', md: 'center' }}
        alignItems={{ base: 'center', md: 'center' }}
      >
        <Button
          fontSize={"3xl"}
          bg={"brand.900"}
          color={"brand.600"}
          fontFamily={"Sofadi One, sans-serif"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          onClick={handleToggle}
          _hover={{ bg: "brand.600", color: "brand.500" }}
          _active={{ bg: "brand.600", color: "brand.500" }}
          position="relative"
          mb={2}
          w={'100%'}
          minH={'60px'}
        >
          {buttonText}
          &nbsp;
          {singleIcon
            ? singleIcon  // Use single icon if provided
            : isVisible ? iconOpen : iconClosed  // Toggle between open/closed icons
          }
        </Button>

        <Box
          id='closable-box'
          bg={"brand.900"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          borderRadius="lg"
          w={'100%'}
          p={4}
          mt={{ base: 4, md: 0 }}
          outline={"2px solid"}
          outlineColor={"brand.600"}
          style={{ display: isVisible ? 'block' : 'none' }}
        >
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            w={'100%'}
            mb={2}
            alignItems={'center'}
          >
            <Text
              fontSize="xl"
              fontWeight="bold"
              w={'100%'}
              textDecor={'underline'}
              textAlign={'center'}
              color={"brand.500"}
            >
              {title}
            </Text>
            <Button
              bg={"brand.900"}
              color={"brand.600"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              onClick={handleToggle}
              _hover={{ bg: "brand.600", color: "brand.500" }}
              _active={{ bg: "brand.600", color: "brand.500" }}
              position="relative"
              m={2}
            >
              <CloseIcon />
            </Button>
          </Box>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default ClosableBox;
