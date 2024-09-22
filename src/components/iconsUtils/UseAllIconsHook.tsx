// import { useState, useEffect } from 'react';

// // Hook to dynamically load all icons from a folder (using a static path)
// export const useAllIcons = (folderPath: string) => {
//   const [icons, setIcons] = useState<Record<string, React.FC<any>>>({});

//   useEffect(() => {
//     const importIcons = async () => {
//       const context = import.meta.glob('/src/components/iconsUtils/**/*.tsx'); // Static path
//       const imports = await Promise.all(
//         Object.keys(context).map(async (key) => {
//           const module: { [key: string]: React.FC<any> } = await context[key](); 
//           const iconName = key
//             .split('/')
//             .pop()!
//             .replace('.tsx', ''); // Extract the icon name from the path
//           return { [iconName]: module[iconName] };
//         })
//       );

//       // Combine all the imports into a single object
//       setIcons(Object.assign({}, ...imports));
//     };

//     importIcons();
//   }, []); // No folderPath as it needs to be static

//   return icons;
// };
