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
import { useRouter } from 'expo-router';
import list from '~/constant/list';

export default function List() {
  const width = Dimensions.get('window').width;
  const router = useRouter();

  return (
    <View className="flex-1">
      <StatusBar backgroundColor="transparent" barStyle={'dark-content'} />
      <ImageBackground
        className="flex-1 flex-col items-center justify-center"
        source={require('../assets/images/bg/homeBg.png')}>
        <View className=" mx-auto mt-[5vh] h-[91%] w-[94vw] rounded-2xl bg-background">
          <FlatList
            className=" mx-5 py-3"
            data={list}
            renderItem={({ item }) => (
              <View className="  my-1 flex flex-col">
                <TouchableOpacity
                  onPress={() => {
                    router.push(`/${item.type}`);
                  }}
                  key={item.id}
                  className=" my-3 flex flex-row items-center justify-between text-wrap">
                  <Text className=" font-josefinSlabSemiBold w-[80%] text-wrap text-xl text-primary">
                    {item.type}
                  </Text>

                  <AntDesign name="arrowright" size={23} color="#e8dcd0" />
                </TouchableOpacity>
                <View className=" border-b-[.3px] border-b-primary "></View>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
