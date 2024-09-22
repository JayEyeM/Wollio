declare module '*.tsx' {
    import { createIcon } from '@chakra-ui/react';
    const icon: ReturnType<typeof createIcon>;
    export default icon;
  }
  