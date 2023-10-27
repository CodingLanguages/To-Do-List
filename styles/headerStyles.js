import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
    header: {
      paddingTop: Platform.OS === 'android' ? 50 : 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#3498db',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#2980b9',
    },
    title: {
      fontSize: 24,
      color: 'white',
    },
  });

export default headerStyles;