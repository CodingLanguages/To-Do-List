import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'android' ? 50 : 0,
        paddingLeft: 20,
        backgroundColor:'#3498db',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },  
    deleteButton: {
        size: 24,
        color: 'red',
    }
}); 

export default headerStyles;