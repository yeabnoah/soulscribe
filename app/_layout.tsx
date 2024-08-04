import { useFonts } from 'expo-font';
import '../global.css';
import { Slot, Stack } from 'expo-router';
import { useEffect } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import { Text, View } from 'react-native';

const categories = ['Category1', 'Category2', 'Category3']; // Replace with your actual categories

export default function Layout() {
  const [loaded, error] = useFonts({
    'jost-Light': require('../assets/fonts/Jost-Light.ttf'),
    'jost-Regular': require('../assets/fonts/Jost-Regular.ttf'),
    'jost-LightItalic': require('../assets/fonts/Jost-LightItalic.ttf'),
    'jost-Bold': require('../assets/fonts/Jost-Bold.ttf'),
    'jost-BoldItalic': require('../assets/fonts/Jost-BoldItalic.ttf'),
    'jost-Thin': require('../assets/fonts/Jost-Thin.ttf'),
    'jost-ThinItalic': require('../assets/fonts/Jost-ThinItalic.ttf'),
    'jost-Medium': require('../assets/fonts/Jost-Medium.ttf'),
    'jost-MediumItalic': require('../assets/fonts/Jost-MediumItalic.ttf'),
    'jost-ExtraLight': require('../assets/fonts/Jost-ExtraLight.ttf'),
    'jost-ExtraLightItalic': require('../assets/fonts/Jost-ExtraLightItalic.ttf'),
    'jost-SemiBold': require('../assets/fonts/Jost-SemiBold.ttf'),
    'jost-SemiBoldItalic': require('../assets/fonts/Jost-SemiBoldItalic.ttf'),
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
