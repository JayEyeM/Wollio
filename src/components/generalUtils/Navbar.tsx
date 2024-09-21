import { Box, Flex, HStack, Menu, MenuButton, MenuList, MenuItem, Text, Button, Heading } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'; 
import { WollioLogo } from './WollioLogo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="space-between"
      p={4}
      bg="brand.900"
      color="brand.700"
    >
      <Box boxSize={"100px"}>
        <WollioLogo w={20} h={20} />
      </Box>
      <Box>
        <Heading fontSize="6xl" fontWeight="bold" fontFamily="Sofadi One, sans-serif" color="brand.500">
          Wollio
        </Heading>
      </Box>
      
      <HStack spacing={4}>
        <Box as={Link} to="/" color={'brand.500'} _hover={{ color: 'brand.600' }}>
          Home
        </Box>
       
        <Box as={Link} to="/icons" color={'brand.500'} _hover={{ color: 'brand.600' }}>
          Icons
        </Box>
        
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="brand.900" color="white">
            More
          </MenuButton>
          <MenuList bg="brand.900">
            <MenuItem as={Link} to="/instructions" bg="brand.900" color="brand.500" _hover={{ textDecoration: 'none', color: 'brand.600' }}>
              Instructions
            </MenuItem>
            <MenuItem as={Link} to="/about" bg="brand.900" color="brand.500" _hover={{ textDecoration: 'none', color: 'brand.600' }}>
              About
            </MenuItem>
            <MenuItem as={Link} to="/contact" bg="brand.900" color="brand.500" _hover={{ textDecoration: 'none', color: 'brand.600' }}>
              Contact
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Navbar;
