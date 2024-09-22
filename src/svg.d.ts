declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

// Extend the NodeRequire type to include require.context
declare var require: {
  context: (path: string, deep?: boolean, filter?: RegExp) => {
    keys: () => string[];
    (id: string): any;
  };
};
