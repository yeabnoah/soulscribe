import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  useWindowDimensions,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import list from '~/constant/list';
import * as Clipboard from 'expo-clipboard';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicon from '@expo/vector-icons/Ionicons';

type DataItem = {
  id: number;
  title: string;
  description: string;
  verses: {
    id: number;
    text: string;
  }[];
};

type Item = {
  id: number;
  type: string;
  data?: DataItem[];
};

export default function Verse() {
  const [copiedText, setCopiedText] = React.useState('');

  const copyToClipboard = async (input: string) => {
    try {
      await Clipboard.setStringAsync(input);
      ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show('Failed to copy to clipboard', ToastAndroid.SHORT);
    }
  };

  const [details, setDetails] = useState<DataItem | null>(null);
  const { width } = useWindowDimensions();
  const router = useRouter();
  const { data, category } = useGlobalSearchParams();

  function getObjectByTypeAndId(type: string, id: number): DataItem | null {
    const typeObject = list.find((item) => item.title === type);
    if (!typeObject) return null;
    if (typeObject.data) {
      return typeObject.data.find((dataItem) => dataItem.id === id) || null;
    }
    return null;
  }

  useEffect(() => {
    if (category && data) {
      setDetails(getObjectByTypeAndId(category as string, Number(data)));
    }
  }, [category, data]);

  return (
    <View className="flex-1">
      <ImageBackground
        source={require('../../assets/images/test.jpg')}
        className=" flex flex-1 flex-col justify-end">
        <StatusBar backgroundColor="transparent" barStyle={'light-content'} />
        <View className="mx-auto mb-[2vh] mt-[5vh] w-[94vw] rounded-3xl">
          {details ? (
            <View className=" p-4">
              <Text className="mb-[3vh] font-jostSemiBold text-2xl text-white">
                {details.title}
              </Text>

              <FlatList
                data={details.verses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View className="mt-2 rounded-xl bg-white/5 px-5 py-5">
                    <Text className="  font-jostRegular text-xl text-primary/80">{item.text}</Text>

                    <View className=" flex flex-row justify-end">
                      <TouchableOpacity
                        className=" flex flex-row items-center justify-end gap-2 rounded bg-black/20 px-2 py-1"
                        onPress={() => {
                          copyToClipboard(item.text);
                        }}>
                        <Ionicon name="copy-sharp" size={12} color="#d4d4d4" />
                        <Text className="  text-md font-jostRegular text-primary/80">Copy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
          ) : (
            <ActivityIndicator size={'large'} />
          )}
        </View>
      </ImageBackground>
    </View>
  );
}
