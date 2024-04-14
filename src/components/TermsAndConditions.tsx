import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View>
      <Text>Terms & Conditions</Text>
      <View style={styles.container}>
        <Pressable
          testID="pressable-check"
          onPress={() => setIsChecked(!isChecked)}>
          <Text>{isChecked ? 'Checked' : 'Unchecked'}</Text>
        </Pressable>
        <Text>I accept the terms and conditions.</Text>
      </View>
      <Pressable disabled={!isChecked}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
  },
});
