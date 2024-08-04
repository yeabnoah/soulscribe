import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

export default function Home() {
  const width = Dimensions.get('window').width;
  const router = useRouter();

  return (
    <View className="flex-1 bg-background">
      <ImageBackground source={require('../assets/images/test.jpg')} className=" flex-1">
        <StatusBar backgroundColor="transparent" barStyle={'light-content'} />

        <View className="flex-1 justify-end p-3">
          <View className="z-10 mb-[5vh] flex flex-col rounded-xl bg-white/5 px-5 py-[3vh]">
            <Text className=" mt-2 font-jostSemiBold text-2xl text-primary/80">
              Joshua 1:8 (NIV)
            </Text>
            {/* <View className=" my-2 border-b border-primary/30"></View> */}
            <Text className=" font-jostRegular text-xl text-primary/80">
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
              <Text className=" font-jostMedium text-2xl text-primary/80">Start</Text>

              <AntDesign
                name="arrowright"
                size={16}
                color="white"
                className=" flex flex-row items-center justify-center rounded-full bg-white/30 p-2 "
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
