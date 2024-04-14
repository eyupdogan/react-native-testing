import React from 'react';
import {Pressable, Text, View} from 'react-native';

interface Props {
  name?: string;
}

const Greet = ({name}: Props) => {
  if (name) {
    return <Text>Hello {name} </Text>;
  }

  return (
    <View>
      <Pressable>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default Greet;
