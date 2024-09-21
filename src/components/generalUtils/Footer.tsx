import { Flex, Box, Text, Link, Stack } from '@chakra-ui/react';
import { WollioLogo } from './WollioLogo';

const Footer = () => {
  return (
    <Flex
      as="footer"
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="center"
      p={4}
      bg="gray.600"
      color="white"
      mt={6} // Adds margin-top to the footer
      w="100%"
      borderRadius={'lg'}
    >
      
      <Stack spacing={4} mb={4}>
        <Text>&copy; {new Date().getFullYear()} Wollio. All rights reserved.</Text>
        <Text>https://github.com/JayEyeM. All rights reserved.</Text>
        <Stack direction="row" spacing={4}>
          <Link href="#" color="brand.500" _hover={{ textDecoration: 'underline' }}>
            Privacy Policy
          </Link>
          <Link href="#" color="brand.500" _hover={{ textDecoration: 'underline' }}>
            Terms of Service
          </Link>
          <Link href="#" color="brand.500" _hover={{ textDecoration: 'underline' }}>
            Contact Us
          </Link>
        </Stack>
      </Stack>
      <Box bg={'brand.900'} borderRadius={'full'} p={2}>
      <WollioLogo w={8} h={8} />
      </Box>
      <Box>
        <Text fontSize="sm">Designed with ❤️ using Chakra UI</Text>
      </Box>
    </Flex>
  );
};

export default Footer;
