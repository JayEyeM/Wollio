import { Box, Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/generalUtils/Navbar';
import Footer from './components/generalUtils/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Instructions from './pages/Instructions';

const App = () => {
  return (
    <Flex direction="column" p={2} w={'100vw'} h={'auto'} minHeight="100vh" bg="brand.900" color="white">
      <Navbar />
      <Box as="main" flex="1" p={4} bg="brand.900" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </Box>
      <Footer />
    </Flex>
  );
};

export default App;
