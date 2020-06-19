import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    user:{
        padding: 8,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
        


    },
    textInput: {
        padding: 8,
        height: 40,
        borderColor: "#1999e9",
        borderBottomWidth: 1,
        marginBottom: 36
    },

    contato: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 4,
    },

    action:{
        marginTop: 12,
        marginBottom: 8,
        marginRight: '15%',
        backgroundColor: '#1999e9',
        borderRadius: 26,
        height: 50,
        width: '70%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    actionText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
      }

});
