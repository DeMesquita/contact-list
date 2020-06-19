import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { white } from 'ansi-colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText:{
        fontSize: 15,
        color: '#737380',
        textAlign: 'left',
        marginBottom: 8,
    },
    headerTextBold:{
        fontWeight: 'bold',
        textAlign: 'left'

    },
    title:{
        fontSize: 30,
        marginBottom: 100,
        marginTop: 100,
        color: '#13131a',
        fontWeight: 'bold',

    },

    contatosList:{
        marginTop: 5,

    },

    contato:{
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 4,


    },

    contatoValue:{
        marginTop: 8,
        marginBottom: 8,
        fontSize: 14,
        color: '#41414d',
        
    },

  button:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    busca:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'baseline',
        padding: 8,
        borderRadius: 2,
        backgroundColor: '#FFFF',
        marginBottom: 8,
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
        fontSize: 18,
        fontWeight: 'bold',
    },






});
