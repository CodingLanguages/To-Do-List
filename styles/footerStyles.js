import { StyleSheet } from 'react-native';

const footerStyles = StyleSheet.create({
    footer: {
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
        fontSize: 16,
      },
      addButton: {
        backgroundColor: '#27ae60',
        borderRadius: 5,
        padding: 10,
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 18,
        marginBottom: 10,
      },
      modalButton: {
        backgroundColor: '#27ae60',
        borderRadius: 5,
        padding: 10,
      },
      modalButtonText: {
        color: 'white',
        fontSize: 16,
      },
    });

export default footerStyles;