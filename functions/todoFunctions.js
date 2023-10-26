import AsyncStorage from "@react-native-async-storage/async-storage";
  
// Function to load todo items from AsyncStorage
  export const loadTodoItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('todoItems');
      if (storedItems !== null) {
        return (JSON.parse(storedItems));
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error loading todo items: ', error);
      return [];
    }
  };

  // Function to save todo items to AsyncStorage 
  export const saveTodoItems = async (items) => {
    try {
        await AsyncStorage.setItem('todoItems', JSON.stringify(items));
    } catch (error) {
        console.error('Error savind todo items: ', error);
    }
  };

  // Function to handle adding a new todo item
  export const addTodoItem = (todoItems, newItem) => {
    const updatedItems = [...todoItems, newItem];
    saveTodoItems(updatedItems);
    return updatedItems;
  };

  //Function to handle editing a todo item
  export const editTodoItem = (todoItems, editedItem) => {
    const updatedItems = todoItems.map((item) =>
    item.id === editedItem.id ? editedItem: item
    );
    saveTodoItems(updatedItems);
    return updatedItems;
  };

  // Function to handle marking a todo item as complete
  export const markTodoComplete = (todoItems, completedItems) => {
    const updatedItems = todoItems.map((item) => 
    item.id === completedItems.id
    ? {...item, isComplete: !item.isComplete}
    : item
    );
    saveTodoItems(updatedItems);
    return updatedItems;
  };

  // Function to handle deleting a todo item
  export const deleteTodoItem = (todoItems, deletedItem) => {
    const updatedItems = todoItems.filter((item) => item.id !== deletedItem.id);
    saveTodoItems(updatedItems);
    return updatedItems;
  };


