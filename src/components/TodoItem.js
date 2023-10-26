import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import todoItemStyles from '../../styles/todoItemStyles';

const TodoItem = ({ todoItem, onEdit, onComplete, onDelete }) => {
    return (
        <View style = { todoItemStyles.container}>
            <Text style={todoItemStyles.text}>{todoItem.text}</Text>
            <View style={todoItemStyles.buttonContainer}>
                <TouchableOpacity onPress={onEdit}>
                    <Icon name="edit" type="material" color="blue" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onComplete}>
                    {todoItem.isComplete ? (
                        <Icon name="check-box" type="material" color="green" />
                    ) : (
                        <Icon name="check-box-outline-blank" type="material" color="gray" />
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <Icon 
                        name="delete" 
                        type="material" 
                        color="red" />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default TodoItem;