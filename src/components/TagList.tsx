import React, {Fragment, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TagList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json));
  });
  return (
    <View>
      {todos.map((todo, index) => (
        <Fragment key={index}>
          <Text testID="tag-item">{todo.title}</Text>
        </Fragment>
      ))}
    </View>
  );
};

export default TagList;
