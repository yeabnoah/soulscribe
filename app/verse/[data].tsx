import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useGlobalSearchParams, useLocalSearchParams, useRouter } from 'expo-router';
import list from '~/constant/list';

export default function Verse() {
  const width = Dimensions.get('window').width;
  const router = useRouter();
  const { data } = useGlobalSearchParams();

  console.log(data);
  return (
    <View className="flex-1">
      <StatusBar backgroundColor="transparent" barStyle={'dark-content'} />
      <ImageBackground
        className="flex-1 flex-col items-center justify-center"
        source={require('../../assets/images/bg/detailBg.png')}>
        <View className=" mx-auto mt-[5vh] h-[91%] w-[94vw] rounded-2xl bg-background"></View>
      </ImageBackground>
    </View>
  );
}
