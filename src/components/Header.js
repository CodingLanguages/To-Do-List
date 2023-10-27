import React from 'react';
import { View, Text} from 'react-native';
import { Icon } from 'react-native-elements';
import headerStyles from '../../styles/headerStyles';

const Header = ({ title, onDeleteAll }) => {
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.title}>{title}</Text>
      <Icon
        name="delete-sweep"
        type="material"
        color="#e74c3c"
        size={24}
        onPress={onDeleteAll}
      />
    </View>
  );
};



export default Header;

