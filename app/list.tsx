import React, { useState } from 'react';
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
  const [selectedType, setSelectedType] = useState('all'); // State to manage the selected type
  const width = Dimensions.get('window').width;
  const router = useRouter();

  // Filter the list based on the selected type
  const filteredList =
    selectedType === 'all' ? list : list.filter((item) => item.type === selectedType);

  return (
    <View className="flex-1 bg-background">
      <ImageBackground source={require('../assets/images/test.jpg')} className="flex-1">
        <StatusBar backgroundColor="transparent" barStyle={'light-content'} />

        <View className="mx-auto mt-[7vh] h-[100%] w-full rounded-2xl">
          <View className="my-4 flex-row justify-around">
            <TouchableOpacity onPress={() => setSelectedType('all')}>
              <Text
                className={`text-xl ${selectedType === 'all' ? 'text-primary' : 'text-white'} font-jostRegular`}>
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedType('relationship')}>
              <Text
                className={`text-xl ${selectedType === 'relationship' ? 'text-primary' : 'text-white'} font-jostRegular`}>
                Relationship
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedType('Behavior')}>
              <Text
                className={`text-xl ${selectedType === 'behavior' ? 'text-primary' : 'text-white'} font-jostRegular`}>
                Behavior
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedType('general')}>
              <Text
                className={`text-xl ${selectedType === 'general' ? 'text-primary' : 'text-white'} font-jostRegular`}>
                General
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            className="mx-2 rounded-xl bg-black/20 py-3"
            data={filteredList}
            renderItem={({ item }) => (
              <View className="my-1 flex flex-col rounded px-5 py-3 py-4">
                <TouchableOpacity
                  onPress={() => {
                    router.push(`/${item.title}`);
                  }}
                  key={item.id}
                  className="flex flex-row items-center justify-between text-wrap">
                  <Text className="w-[80%] text-wrap font-jostMedium text-xl text-primary/80">
                    {item.title}
                  </Text>
                  <AntDesign name="arrowright" size={16} color="rgb(212 212 212)" />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
