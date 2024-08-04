/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        bg2: '#272d33',
        background: '#191919',
        primary: '#d4d4d4',
        darkBackground: '#5f4137',
      },
      fontFamily: {
        jostRegular: ['jost-Regular'],
        jostLight: ['jost-Light'],
        jostLightItalic: ['jost-LightItalic'],
        jostBold: ['jost-Bold'],
        jostBoldItalic: ['jost-BoldItalic'],
        jostThin: ['jost-Thin'],
        jostThinItalic: ['jost-ThinItalic'],
        jostMedium: ['jost-Medium'],
        jostMediumItalic: ['jost-MediumItalic'],
        jostExtraLight: ['jost-ExtraLight'],
        jostExtraLightItalic: ['jost-ExtraLightItalic'],
        jostSemiBold: ['jost-SemiBold'],
        jostSemiBoldItalic: ['jost-SemiBoldItalic'],
      },
    },
  },
  plugins: [],
};
