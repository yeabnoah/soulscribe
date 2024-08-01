import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

export default function Home() {
  const width = Dimensions.get('window').width;
  const router = useRouter();

  return (
    <View className="flex-1">
      <StatusBar backgroundColor="transparent" barStyle={'dark-content'} />
      <ImageBackground
        // blurRadius={0}
        className="flex-1"
        source={require('../assets/images/bg/homeBg.png')}>
        <View className="flex-1 justify-end p-3">
          <View className="flex flex-col rounded-md p-3 py-[8vh]">
            <Text className="font-josefinSlabBold mt-2 text-2xl text-black">Joshua 1:8 (NIV)</Text>
            <View className=" my-2 border-b border-black"></View>
            <Text className="font-josefinSlab font-josefinSlabSemiBold text-xl">
              "Keep this Book of the Law always on your lips; meditate on it day and night, so that
              you may be careful to do everything written in it. Then you will be prosperous and
              successful."
            </Text>
          </View>

          <View className=" m-3 flex flex-row justify-end">
            <TouchableOpacity
              onPress={() => {
                router.push('/list');
              }}
              className=" flex flex-row items-center gap-3">
              <Text className=" font-josefinSlabSemiBold text-2xl">Start</Text>

              <AntDesign
                name="arrowright"
                size={24}
                color="white"
                className=" flex flex-row items-center justify-center rounded-full bg-red-400 p-2 "
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
