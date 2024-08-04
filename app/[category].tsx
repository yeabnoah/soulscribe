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
import { useLocalSearchParams, useRouter } from 'expo-router';
import list from '~/constant/list';

interface Data {
  id: number;
  title: string;
  description: string;
  verse: string;
}

export default function Category() {
  const width = Dimensions.get('window').width;
  const router = useRouter();
  const { category } = useLocalSearchParams();

  const data = list.find((item) => item.type == category);
  const dataUpdated = data?.data;

  return (
    <View className="flex-1">
      <StatusBar backgroundColor="transparent" barStyle={'dark-content'} />
      <ImageBackground
        className="flex-1 pt-[5vh]"
        source={require('../assets/images/bg/listBg.png')}>
        <View className="flex-1">
          <View className="mx-5  border-b-gray-500" />
          <View className="mx-5">
            <TouchableOpacity
              onPress={() => {
                router.push('/list');
              }}
              className="flex flex-row items-center gap-3">
              <AntDesign name="left" size={20} color="#000000" />
              <Text className="font-josefinSlabBold py-3 text-2xl">Back</Text>
            </TouchableOpacity>
          </View>
          <View className="mx-5 border-b-[1.3px] border-b-gray-500" />

          <View className="flex-1">
            <Text className="font-josefinSlabSemiBold m-5 w-80 text-4xl">{category}</Text>

            <View className="mx-auto w-[94vw] flex-1 rounded-t-xl bg-background">
              <FlatList
                className="px-5"
                showsVerticalScrollIndicator={false}
                data={dataUpdated}
                renderItem={({ item }) => (
                  <View className="mb-3">
                    <Text className="font-josefinSlabSemiBold mt-3 text-2xl text-primary">
                      {item.title}
                    </Text>
                    <Text className="font-josefinSlabSemiBold mt-3 text-lg text-primary">
                      {item.description}
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        router.push(`/verse/${item.id},${category}`);
                      }}
                      className="flex flex-row items-center justify-end gap-2">
                      <Text className="font-josefinSlabMedium text-right text-lg text-red-400">
                        Read Verse
                      </Text>
                      <AntDesign name="arrowright" size={16} color="#f87171" />
                    </TouchableOpacity>
                    <View className="mt-5 border-b-[.5px] border-b-gray-500" />
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
