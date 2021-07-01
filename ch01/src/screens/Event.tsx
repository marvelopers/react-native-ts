import React from 'react';
import { Alert, Button, TouchableOpacity, TouchableHighlight, Text, TextInput } from 'react-native';

const Event = () => {
  const handlePress = () => Alert.alert('YAY', 'YO');

  return (
    <>
      <Button title="button" color="purple" onPress={handlePress} />
      <TouchableOpacity onPress={handlePress}>
        <Text>Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={handlePress}>
        <Text>Highlight</Text>
      </TouchableHighlight>
      <Text onPress={handlePress}>Text</Text>
      <TextInput
        placeholder="say hello"
        onChangeText={(text: string) => console.log(text)}></TextInput>
    </>
  );
};

export default Event;
