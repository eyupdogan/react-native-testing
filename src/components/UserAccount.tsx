import React from 'react';
import {Pressable, Text, View} from 'react-native';

export type User = {
  id: number;
  name: string;
  isAdmin?: boolean;
};

interface Props {
  user: User;
}

const UserAccount = ({user}: Props) => {
  return (
    <View>
      <Text>User Profile</Text>
      {user.isAdmin && (
        <Pressable>
          <Text>Edit </Text>
        </Pressable>
      )}
      <View>
        <Text>Name: {user.name}</Text>
      </View>
    </View>
  );
};

export default UserAccount;
