import React from 'react';
import { Box, Flex, Text, Heading, Button } from '@chakra-ui/react';
import SlideFadeComponent from '../components/generalUtils/SlideFade';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Home = () => {
  const WhatIsWollio = [
    <Text fontSize="2xl" fontWeight="bold"  textAlign={'center'} color="brand.600" key="1">Wollio is an icon and component library for web developers.</Text>,
    <Text fontSize="lg" textAlign={'center'} color={'brand.500'} key="2">It is designed to be simple, easy to use, and accessible to everyone.</Text>
  ];

  const SimpleDesign = [
    <Text fontSize="2xl" fontWeight="bold" textAlign={'center'} color="brand.600" key="3">Wollio uses Chakra UI behind the scenes.</Text>,
    <Text fontSize="lg" textAlign={'center'} color={'brand.500'} key="4">Use Chakra's prop system to style your icons and components.</Text>
  ];

  

  return (
    <Box w={'100%'} h={'auto'} display={"flex"} flexDirection={"column"} justifyContent="center" bg="brand.900" color="white" p={2}>
      <Heading as="h1" size="xl" w={'60%'} mb={12} ml={'auto'} mr={'auto'} color={'brand.800'} textAlign={'center'} >Wolliofy Your Next Project </Heading>

      <Box 
  bg={'brand.900'}
  w={{ base: '100%', md: '80%' }}
  h={'auto'} 
  ml={'auto'} 
  mr={'auto'} 
  display="flex" 
  flexDirection={{ base: 'column', md: 'row' }}
  alignItems="center"
  justifyContent="center" 
  gap={4}
  p={2}
  overflow={'hidden'}
>
  <Box flex="1" maxW={{ base: '100%', md: '45%' }} alignSelf="center"> 
    <SlideFadeComponent 
      texts={WhatIsWollio} 
      buttonLabel="What is Wollio?" 
      iconClosed={<ChevronDownIcon />} 
      iconOpen={<ChevronUpIcon />} 
      color='brand.900'
      bgColor='brand.700'
      fontSize='2xl'
      fontWeight='bold'
      boxShadow='0px 0px 2px 2px grey'
      offsetX='-100px'
      offsetY='100px'
    />
  </Box>
  <Box flex="1" maxW={{ base: '100%', md: '45%' }} alignSelf="center">  
    <SlideFadeComponent 
      texts={SimpleDesign} 
      buttonLabel="Simple Designing" 
      iconClosed={<ChevronDownIcon />} 
      iconOpen={<ChevronUpIcon />} 
      color='brand.900'
      bgColor='brand.700'
      fontSize='2xl'
      fontWeight='bold'
      boxShadow='0px 0px 2px 2px grey'
      offsetX='100px'
      offsetY='100px'
    />
  </Box>
</Box>

      <Button title="Get Started" color={'brand.900'} boxShadow={'0px 0px 2px 2px white'} bg={'brand.800'} _hover={{ bg: 'brand.700' }} size="lg" mt={6} ml={'auto'} mr={'auto'}>Get Started</Button>
    </Box>
  );
};

export default Home;
