import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons';
import headerStyles from '../../styles/headerStyles';

const Header = ({title, onDeleteAll}) => {
    return (
        <View style={headerStyles.header}>
            <Text style={headerStyles.title}>
                {title}
            </Text>
            <TouchableOpacity style={headerStyles.deleteButton}>
                <MaterialCommunityIcons name="delete" onPress={onDeleteAll}/>
            </TouchableOpacity>
        </View>
    );
};

export default Header;        