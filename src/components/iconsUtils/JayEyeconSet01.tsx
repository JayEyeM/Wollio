// import React from 'react';
// import { SimpleGrid, Box } from '@chakra-ui/react';

// // const icons = import.meta.glob('/src/assets/icons/JayEyecons01/*.svg', { eager: true });

// const icons = import.meta.

// const toPascalCase = (str: string) => 
//   str.replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()).replace(/[^A-Za-z0-9]/g, '');

// const JayEyeconSet01: React.FC = () => {
//   console.log('Loaded icons:', icons);

//   return (
//     <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
//       {Object.entries(icons).map(([path, iconModule]) => {
//         const IconComponent = (iconModule as any).default; // Cast as 'any' for simplicity

//         // Convert the file name to PascalCase for the component
//         const iconName = toPascalCase(path.split('/').pop()?.replace('.svg', '') || '');

//         return (
//           <Box key={path} textAlign="center" display={'flex'} flexDirection={'column'} alignItems={'center'} color={'brand.900'} bg={'brand.600'} p={4} borderRadius={'lg'}>
//             {/* Render the SVG as a React component */}
//             <IconComponent width="50px" height="50px" fill="currentColor" />
//             {/* Display the name of the SVG */}
//             <Box>{iconName}</Box>
//           </Box>
//         );
//       })}
//     </SimpleGrid>
//   );
// };

// export default JayEyeconSet01;
