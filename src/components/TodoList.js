import React from 'react';
import { View, FlatList } from 'react-native';
import TodoItem from './TodoItem';
import todoListStyles from '../../styles/todoListStyles';

const TodoList = ({ todoItems, onEdit, onComplete, onDelete }) => {
  return (
    <View style={todoListStyles.todoList}>
      <FlatList
        data={todoItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            todoItem={item}
            onEdit={(editedItem) => onEdit(editedItem)}
            onComplete={() => onComplete(item)}
            onDelete={() => onDelete(item)}
/>
        )}
      />
    </View>
  );
};

export default TodoList;
