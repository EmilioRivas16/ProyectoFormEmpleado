import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const stylesForm = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        width: width * 0.9,
        textAlign: 'center',
        borderRadius: 6,
        fontSize: 15,
        marginBottom: 30
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        borderColor: 'black',
        backgroundColor: '#2C61FF',
        width: width * 0.41,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputDate: {
        borderWidth: 1,
        padding: 10,
        width: width * 0.25,
        textAlign: 'center',
        borderRadius: 6,
        fontSize: 15,
        marginBottom: 30
    },
    diagonal: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 8
    },
    disabledButton: {
        backgroundColor: 'grey',
        pointerEvents: 'none'
    }
});