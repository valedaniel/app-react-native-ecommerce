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
    content: {
        marginHorizontal: '5%',
        marginTop: '70%',
    },
    item: {
        marginVertical: '3%'
    },
    icon: {
        margin: 10,
        fontSize: DEVICE_WIDTH * 0.065,
        color: 'white'
    },
    image: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    view: {
        flex: 1,
        flexDirection: 'column',
    },
    input: {
        color: 'white'
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex:9999
    }
});