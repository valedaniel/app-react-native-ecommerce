import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    text: {
        fontWeight: 'bold',
    },
    button: {
        marginVertical: '3%',
        borderRadius: 20
    },
    container: {
        paddingTop: '7%',
        paddingHorizontal: '5%',
        backgroundColor: '#0070C0'
    },
    item: {
        marginVertical: '3%'
    },
    icon: {
        margin: 10,
        fontSize: DEVICE_WIDTH * 0.065,
        color: 'white'
    },
    input: {
        color: 'white'
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
});