import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

interface Props {
  onChange: (text: string) => void;
}

const SearchBox = ({onChange}: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = () => {
    onChange(searchTerm);
  };

  return (
    <View>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        onEndEditing={() => {
          if (searchTerm !== '') {
            handleSubmit();
          }
        }}
        placeholder="Search..."
      />
      <Pressable onPress={handleSubmit} testID="pressable-check">
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

export default SearchBox;
