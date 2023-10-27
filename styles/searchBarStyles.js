import { StyleSheet } from 'react-native';

const searchBarStyles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
      },
    });
    
export default searchBarStyles;