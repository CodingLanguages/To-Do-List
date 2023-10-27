import { StyleSheet } from 'react-native';

const todoItemStyles = StyleSheet.create({
  
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: 5,
      marginVertical: 5,
      borderRadius: 5,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    itemText: {
      flex: 1,
      fontSize: 16,
    },
    completedText: {
      textDecorationLine: 'line-through',
      color: '#aaa',
    },
    actionButton: {
      padding: 10,
      backgroundColor: 'transparent',
      borderRadius: 5,
      marginLeft: 5,
    },
    completedAction: {
      backgroundColor: 'transparent',
    },
    editInput: {
      flex: 1,
      fontSize: 18,
      color: '#333',
    },
  });

export default todoItemStyles;