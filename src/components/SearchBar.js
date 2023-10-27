import React from 'react';
import { View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import searchBarStyles from '../../styles/searchBarStyles';

const SearchBar = ({ searchText, onSearchChange }) => {
  return (
    <View style={searchBarStyles.searchBar}>
      <Icon name="search" type="material" color="#3498db" size={20} />
      <TextInput
        style={searchBarStyles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={onSearchChange}
      />
    </View>
  );
};


export default SearchBar;