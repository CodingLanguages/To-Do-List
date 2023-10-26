import React, {useState, useEffect } from 'react';
import {View} from 'react-native';
import {
  loadTodoItems,
  addTodoItem,
  editTodoItem,
  markTodoComplete,
  deleteTodoItem,
} from './functions/todoFunctions';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar'
import TodoList from './src/components/TodoList'
import Footer from './src/components/Footer'
import appStyles from './styles/appStyles';

export default function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [searchText, setSearchText] = useState('');

  //Load todo Items from AsyncStorage on app startup
  useEffect(()=> {
    loadTodoItems().then((items)=> setTodoItems(items));
  }, []);

  // Function to filter todo items based on the search text
  const filteredItems = todoItems.filter((item) =>
  item.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View 
      style={appStyles.container}>
      <Header 
        title= "Todo" 
        onDeleteAll={() => setTodoItems([])} 
      />
      <SearchBar 
        searchText={searchText} 
        onSearchChange={(text) => setSearchText(text)} 
      />
      <TodoList
        todoItems={filteredItems}
        onEdit={editTodoItem}
        onComplete={markTodoComplete}
        onDelete={deleteTodoItem}
      />
      <Footer 
        onAddItem={addTodoItem} 
      />  
    </View>
  );
}