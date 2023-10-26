import { StyleSheet } from 'react-native';

const todoItemStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
})

export default todoItemStyles;