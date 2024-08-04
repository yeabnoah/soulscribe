import { useFonts } from 'expo-font';
import '../global.css';
import { Slot, Stack } from 'expo-router';
import { useEffect } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import { Text, View } from 'react-native';

const categories = ['Category1', 'Category2', 'Category3']; // Replace with your actual categories

export default function Layout() {
  const [loaded, error] = useFonts({
    'josefinSlab-Light': require('../assets/fonts/JosefinSlab-Light.ttf'),
    'josefinSlab-Regular': require('../assets/fonts/JosefinSlab-Regular.ttf'),
    'josefinSlab-LightItalic': require('../assets/fonts/JosefinSlab-LightItalic.ttf'),
    'josefinSlab-Bold': require('../assets/fonts/JosefinSlab-Bold.ttf'),
    'josefinSlab-BoldItalic': require('../assets/fonts/JosefinSlab-BoldItalic.ttf'),
    'josefinSlab-Thin': require('../assets/fonts/JosefinSlab-Thin.ttf'),
    'josefinSlab-ThinItalic': require('../assets/fonts/JosefinSlab-ThinItalic.ttf'),
    'josefinSlab-Medium': require('../assets/fonts/JosefinSlab-Medium.ttf'),
    'josefinSlab-MediumItalic': require('../assets/fonts/JosefinSlab-MediumItalic.ttf'),
    'josefinSlab-ExtraLight': require('../assets/fonts/JosefinSlab-ExtraLight.ttf'),
    'josefinSlab-ExtraLightItalic': require('../assets/fonts/JosefinSlab-ExtraLightItalic.ttf'),
    'josefinSlab-SemiBold': require('../assets/fonts/JosefinSlab-SemiBold.ttf'),
    'josefinSlab-SemiBoldItalic': require('../assets/fonts/JosefinSlab-SemiBoldItalic.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        statusBarStyle: 'light',
        statusBarTranslucent: true,
        statusBarColor: 'transparent',
        animation: 'ios',
        headerShown: false,
      }}></Stack>
  );
}
