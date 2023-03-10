import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import tw from "twrnc";

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text style={tw`bg-red-600 text-2xl`}>I am the home screen</Text>
      <Button 
        title="Chat"
        onPress={() => navigation.navigate("Chat")}
        />
    </View>
  );
};

export default HomeScreen;
