// icons.tsx
import { Box, Heading } from '@chakra-ui/react';
import JayEyeconsSetsDisplay from '../components/iconsUtils/JayEyeconsSetsDisplay';

const Icons = () => (
    <Box>
        <Heading as="h1" size="xl" w={'60%'} mb={12} ml={'auto'} mr={'auto'} color={'brand.800'} textAlign={'center'}>Icon Sets</Heading>
        {/* Your icons page content */}
        <JayEyeconsSetsDisplay />
    </Box>
);

export default Icons;