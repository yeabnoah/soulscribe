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

  const data = list.find((item) => item.title == category);
  const dataUpdated = data?.data;

  return (
    <View className="flex-1">
      <ImageBackground source={require('../assets/images/test.jpg')} className=" flex-1">
        <StatusBar backgroundColor="transparent" barStyle={'light-content'} />
        <View className="flex-1">
          <View className="flex-1">
            <Text className="mx-7 mb-3 mt-16 font-jostSemiBold text-2xl text-background/80">
              {category}
            </Text>

            <View className="mx-auto flex-1 rounded-t-xl">
              <FlatList
                className="mx-auto px-5 py-5"
                showsVerticalScrollIndicator={false}
                data={dataUpdated}
                renderItem={({ item }) => (
                  <View className="mb-3 rounded-xl bg-black/20 px-5">
                    <Text className="mt-3  font-jostMedium text-2xl text-primary/80">
                      {item.title}
                    </Text>
                    <Text className="mt-3  font-jostRegular text-lg text-primary">
                      {item.description}
                    </Text>

                    <View className="flex-row items-center justify-end">
                      <TouchableOpacity
                        onPress={() => {
                          router.push(`/verse/${item.id}?category=${category}`);
                        }}
                        className="my-5 flex w-fit flex-row items-center justify-end gap-2 rounded bg-black/20 px-2 py-1">
                        <Text className="text-right font-jostRegular text-lg text-primary ">
                          Read Verse
                        </Text>
                        <AntDesign name="arrowright" size={16} color="#d4d4d4" />
                      </TouchableOpacity>
                    </View>
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
