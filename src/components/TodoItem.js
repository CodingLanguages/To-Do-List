import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import todoItemStyles from '../../styles/todoItemStyles';

const TodoItem = ({ todoItem, onEdit, onComplete, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todoItem.text);

  const handleEditSave = () => {
    setIsEditing(false);
    onEdit({ ...todoItem, text: editedText });
  };

  return (
    <View style={todoItemStyles.todoItem}>
      {isEditing ? (
        <TextInput
          style={todoItemStyles.editInput}
          value={editedText}
          onChangeText={(text) => setEditedText(text)}
          autoFocus
          onBlur={handleEditSave}
          onSubmitEditing={handleEditSave}
        />
      ) : (
        <Text style={[todoItemStyles.itemText, todoItem.isComplete && todoItemStyles.completedText]}>
          {todoItem.text}
        </Text>
      )}
      {isEditing ? (
        <TouchableOpacity onPress={handleEditSave}>
          <Icon name="check" type="material" color="#27ae60" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={todoItemStyles.actionButton} onPress={() => setIsEditing(true)}>
          <Icon name="edit" type="material" color="#3498db" />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={[todoItemStyles.actionButton, todoItem.isComplete && todoItemStyles.completedAction]}
        onPress={onComplete}
      >
        <Icon
          name={todoItem.isComplete ? 'check-box' : 'check-box-outline-blank'}
          type="material"
          color={todoItem.isComplete ? '#27ae60' : '#3498db'}
        />
      </TouchableOpacity>
      <TouchableOpacity style={todoItemStyles.actionButton} onPress={onDelete}>
        <Icon name="delete" type="material" color="#e74c3c" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
