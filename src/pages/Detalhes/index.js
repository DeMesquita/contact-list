import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';


export default function Detalhes() {

    const navigation = useNavigation();
    const route = useRoute();

    const contato = route.params.contato;

    const message = 'Olá, '+ [contato.nome] + '\n\n';
    const number = [contato.telefone];

    function sendEmail() {
        MailComposer.composeAsync({
            subject: 'Assunto',
            recipients: [contato.email],
            body: message,
        })
    }
    
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`)
    }


    return (
        <View style={styles.container} >
           

            <View style={styles.contato}>

                
                <View  style={styles.pic}>
                <Feather name="user" size={50} color="#1999e9" />
    
                </View>               
                <Text style={styles.contatoPropriety}> Nome  </Text>
                <Text style={styles.contatoValue}> {contato.nome} </Text>

                <Text style={styles.contatoPropriety}> Número </Text>
                <Text style={styles.contatoValue}> {contato.telefone} </Text>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.description}> Contact via: </Text>
                <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={sendWhatsapp}>
                        <Text style={styles.actionText}> Whatsapp </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={sendEmail}>
                        <Text style={styles.actionText}> Email </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
