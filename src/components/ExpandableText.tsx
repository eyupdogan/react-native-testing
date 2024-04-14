import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

interface Props {
  text: string;
}

const ExpandableText = ({text}: Props) => {
  const limit = 255;
  const [isExpanded, setExpanded] = useState(false);

  if (text.length <= limit) {
    return <Text>{text}</Text>;
  }
  return (
    <View>
      {isExpanded ? (
        <Text>{text}</Text>
      ) : (
        <Text>{text.substring(0, limit)}...</Text>
      )}
      <Pressable onPress={() => setExpanded(!isExpanded)} role="button">
        <Text>{isExpanded ? 'Show less' : 'Show more'}</Text>
      </Pressable>
    </View>
  );
};

export default ExpandableText;
