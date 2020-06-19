import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    contato: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 4,
        
    },
    pic:{
        justifyContent: 'center',
        alignItems: 'center',
    }
,
    contatoPropriety: {
        fontSize: 16,
        marginTop: 8,
        color: '#41414d',
        fontWeight: 'bold',
    },

    contatoValue: {
        marginTop: 8,
        margin: 8,
        fontSize: 14,
        color: '#41414d',

    },

    contactBox: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 4,
    },

    description:{
        marginTop: 16,
        color: '#737380',
        fontSize: 16,
    },

    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action:{
        backgroundColor: '#1999e9',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',

    },

    actionText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    user:{
        padding: 8,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
        


    },

});
