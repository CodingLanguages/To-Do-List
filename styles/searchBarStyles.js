import { StyleSheet } from 'react-native';

const searchBarStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    imput: {
        height: 40,
        borderColor:'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
});

export default searchBarStyles;