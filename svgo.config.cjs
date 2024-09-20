module.exports = {
  multipass: true, // Optimize multiple times if needed
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false, // Keep the viewBox attribute
        },
      },
    },
    {
      name: "removeAttrs", // Keep this as an object
      params: {
        attrs: "fill", // Remove fill attributes
      },
    },
  ],
};
