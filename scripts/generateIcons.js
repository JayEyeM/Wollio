import fs from "fs";
import path from "path";

const iconsDir = path.join(process.cwd(), "src/assets/icons");
const outputDir = path.join(process.cwd(), "src/components/iconsUtils");

const generateIcons = () => {
  const iconSets = fs.readdirSync(iconsDir, { withFileTypes: true });

  iconSets.forEach((set) => {
    if (set.isDirectory()) {
      const setPath = path.join(iconsDir, set.name);
      const outputSetDir = path.join(outputDir, set.name);

      // Create output directory for the icon set
      if (!fs.existsSync(outputSetDir)) {
        fs.mkdirSync(outputSetDir, { recursive: true });
      }

      const iconFiles = fs.readdirSync(setPath);

      iconFiles.forEach((file) => {
        const iconName = path.basename(file, path.extname(file)); // Get the icon name without extension
        const svgContent = fs.readFileSync(path.join(setPath, file), "utf-8");

        // Use a regex to extract the path data from the SVG
        const pathMatch = svgContent.match(/<path[^>]+d="([^"]+)"/);
        const transformMatch = svgContent.match(/transform="([^"]+)"/);
        const pathData = pathMatch ? pathMatch[1] : "";
        const transformData = transformMatch ? transformMatch[1] : "";

        const iconContent = `
import { createIcon } from '@chakra-ui/react';

export const ${
          iconName.charAt(0).toUpperCase() + iconName.slice(1)
        } = createIcon({
  displayName: '${iconName.charAt(0).toUpperCase() + iconName.slice(1)}',
  viewBox: '0 0 26.458 26.458',
  path: [
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      d="${pathData}"
      transform="${transformData}"
    />
  ],
});
`;

        fs.writeFileSync(
          path.join(
            outputSetDir,
            `${iconName.charAt(0).toUpperCase() + iconName.slice(1)}.tsx`
          ),
          iconContent
        );
      });
    }
  });
};

generateIcons();
