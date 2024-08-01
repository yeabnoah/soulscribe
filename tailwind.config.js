/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#3d3d3d',
        primary: '#E8DCD0',
        darkBackground: '#5f4137',
      },
      fontFamily: {
        josefinSlabRegular: ['josefinSlab-Regular'],
        josefinSlabLight: ['josefinSlab-Light'],
        josefinSlabLightItalic: ['josefinSlab-LightItalic'],
        josefinSlabBold: ['josefinSlab-Bold'],
        josefinSlabBoldItalic: ['josefinSlab-BoldItalic'],
        josefinSlabThin: ['josefinSlab-Thin'],
        josefinSlabThinItalic: ['josefinSlab-ThinItalic'],
        josefinSlabMedium: ['josefinSlab-Medium'],
        josefinSlabMediumItalic: ['josefinSlab-MediumItalic'],
        josefinSlabExtraLight: ['josefinSlab-ExtraLight'],
        josefinSlabExtraLightItalic: ['josefinSlab-ExtraLightItalic'],
        josefinSlabSemiBold: ['josefinSlab-SemiBold'],
        josefinSlabSemiBoldItalic: ['josefinSlab-SemiBoldItalic'],
      },
    },
  },
  plugins: [],
};
