import React, { useState } from 'react';
import { View, TextInput,TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import footerStyles from '../../styles/footerStyles';

const Footer = ({ onAddItem }) => {
  const [newItemText, setNewItemText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddItem = () => {
    if (newItemText) {
      onAddItem({ text: newItemText, isComplete: false });
      setNewItemText('');
    } else {
      toggleModal();
    }
  };

  return (
    <View style={footerStyles.footer}>
      <TextInput
        style={footerStyles.input}
        placeholder="Add a new item..."
        value={newItemText}
        onChangeText={(text) => setNewItemText(text)}
      />
      <TouchableOpacity style={footerStyles.addButton} onPress={handleAddItem}>
        <Icon name="add" type="material" color="white" size={30} />
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={footerStyles.modalContent}>
          <Text style={footerStyles.modalText}>Please enter a value before adding.</Text>
          <TouchableOpacity style={footerStyles.modalButton} onPress={toggleModal}>
            <Text style={footerStyles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};



export default Footer;



