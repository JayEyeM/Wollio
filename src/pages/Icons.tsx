import { Box, Heading } from '@chakra-ui/react';
import JayEyeconsSetsDisplay from '../components/iconsUtils/JayEyeconsSetsDisplay';

import * as W01 from '../components/iconsUtils/JayEyecons01/index01'; 
import * as W02 from '../components/iconsUtils/JayEyecons02/index02'; 
import * as W03 from '../components/iconsUtils/JayEyecons03/index03'; 


const Icons = () => (
    <Box pb={4}>
        <Heading as="h1" size="xl" w={'60%'} mb={12} ml={'auto'} mr={'auto'} color={'brand.800'} textAlign={'center'}>
            Icon Sets
        </Heading>
        <Box w={'100%'} m={'auto'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
            <W01.MoonIcon w={20} h={20} color={'brand.800'} m={2} />
            <W02.MoonIcon02 w={20} h={20} color={'brand.800'} m={2} />
            <W03.MoonIcon03 w={20} h={20} color={'brand.800'} m={2} />
            <W01.SunIcon w={20} h={20} color={'brand.800'} m={2} />
            <W02.SunIcon02 w={20} h={20} color={'brand.800'} m={2} />
            <W03.SunIcon03 w={20} h={20} color={'brand.800'} m={2} />
            <W01.HomeIcon w={20} h={20} color={'brand.800'} m={2} />
            <W02.HomeIcon02 w={20} h={20} color={'brand.800'} m={2} />
            <W03.HomeIcon03 w={20} h={20} color={'brand.800'} m={2} />
            <W01.CheckIcon w={20} h={20} color={'brand.800'} m={2} /> 
            <W02.CheckIcon02 w={20} h={20} color={'brand.800'} m={2} />
            <W03.CheckIcon03 w={20} h={20} color={'brand.800'} m={2} />
            <W01.AddIcon w={20} h={20} color={'brand.800'} m={2} />
            <W02.AddIcon02 w={20} h={20} color={'brand.800'} m={2} />
            <W03.AddIcon03 w={20} h={20} color={'brand.800'} m={2} />
        </Box>
        <JayEyeconsSetsDisplay />
    </Box>
);

export default Icons;
