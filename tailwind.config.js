export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#787878', // Define your custom color
        customFieldColor: '#D9D9D9',
        customLabelColor: '#404040',
        customGreenColor: '#248D50',
        customgraydark: ' #888888'

      },
      screens: {
        customMax: { max: '1124px' },
        customlg: '1125px',
      },
    },
  },
  plugins: [],
};
