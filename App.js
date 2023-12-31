import React, { useState, useEffect } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  loadTodoItems,
  addTodoItem,
  editTodoItem,
  markTodoComplete,
  deleteTodoItem,
} from './functions/todoFunctions';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import TodoList from './src/components/TodoList';
import Footer from './src/components/Footer';
import appStyles from './styles/appStyles';

export default function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Load todo Items from AsyncStorage on app startup
  useEffect(() => {
    loadTodoItems().then((items) => setTodoItems(items));
  }, []);

  // Function to handle adding a new todo item
  const handleAddTodo = (newItem) => {
    const updatedItems = addTodoItem(todoItems, newItem);
    setTodoItems(updatedItems);
  };

  // Function to handle editing a todo item
  const handleEditTodo = (editedItem) => {
    const updatedItems = editTodoItem(todoItems, editedItem);
    setTodoItems(updatedItems);
  };

  // Function to handle marking a todo item as complete
  const handleMarkComplete = (completedItem) => {
    const updatedItems = markTodoComplete(todoItems, completedItem);
    setTodoItems(updatedItems);
  };

  // Function to handle deleting a todo item
  const handleDeleteTodo = (deletedItem) => {
    const updatedItems = deleteTodoItem(todoItems, deletedItem);
    setTodoItems(updatedItems);
  };

  // Function to filter todo items based on the search text
  const filteredItems = todoItems.filter((item) =>
    item.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <KeyboardAvoidingView style={appStyles.container} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
      <Header title="Todo List" onDeleteAll={() => setTodoItems([])} />
      <SearchBar searchText={searchText} onSearchChange={(text) => setSearchText(text)} />
      <KeyboardAwareScrollView>
        <TodoList
          todoItems={filteredItems}
          onEdit={handleEditTodo}
          onComplete={handleMarkComplete}
          onDelete={handleDeleteTodo}
        />
      </KeyboardAwareScrollView>
      <Footer onAddItem={handleAddTodo} />
    </KeyboardAvoidingView>
  );
}
