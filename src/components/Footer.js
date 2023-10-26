import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements';
import footerStyles from '../../styles/footerStyles';

const Footer = ({ onAddItem }) => {
    const [newItemText, setNewItemText] = useState('');

    const handleAddItem = () => {
        if (newItemText.trim() !== '') {
            onAddItem({text: newItemText, isComplete: false});
            setNewItemText('');
        }
    };

    return (
        <View style={footerStyles.container}>
            <TextInput
                style={footerStyles.input}
                placeholder='Add a new item...'
                value={newItemText}
                onChangeText={(text) => setNewItemText(text)}
            />
            <TouchableOpacity
                style={footerStyles.addButton}
                onPress={handleAddItem}>
                    <Icon 
                        name='add'
                        type='material'
                        color='white'
                        size={24}
                    />    
            </TouchableOpacity>    
        </View>
    )
}

export default Footer;