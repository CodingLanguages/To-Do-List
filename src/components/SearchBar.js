import React from 'react';
import { View, TextInput } from 'react-native';
import searchBarStyles from '../../styles/searchBarStyles';

const SearchBar = ({ searchText, onSearchChange }) => {
    return (
        <View style={searchBarStyles.container}>
            <TextInput
                style={searchBarStyles.input}
                placeholder='Search...'
                value={searchText}
                onChangeText={onSearchChange}
            />
        </View>
    );
};

export default SearchBar;