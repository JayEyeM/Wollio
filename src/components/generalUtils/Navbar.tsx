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
      color="white"
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
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
          About
        </Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="brand.900" color="white">
            More
          </MenuButton>
          <MenuList bg="brand.900">
            <MenuItem bg="brand.900">
              <Link to="/instructions" style={{ textDecoration: 'none', color: 'inherit' }}>
                Instructions
              </Link>
            </MenuItem>
            <MenuItem bg="brand.900">
              <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                Contact
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Navbar;
