import { StyleSheet } from 'react-native';

export const stylesCard = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B3BA9B',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        width: 300,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 20,
    },
    image: {
        height: 100,
        width: 100,
        marginTop: -30,
    },
    description: {
        fontWeight: 'bold',
    },
    descriptionContainer: {
        marginTop: 5,
        marginBottom: 5
    }
});