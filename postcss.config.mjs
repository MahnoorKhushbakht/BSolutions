/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['last 2 versions', 'ie >= 11'],
    },
  },
};

export default config;
