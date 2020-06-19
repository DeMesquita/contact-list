import React, {useEffect, useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import api from '../../services/api';

import styles from './styles'
import { FlatList } from 'react-native-gesture-handler';

export default function Contatos() {
    const [contatos, setContatos] = useState([]);
    const [total, setTotal] = useState(0);

    const navigation = useNavigation();

    function navigateToDetail(contato) {
        navigation.navigate('Detalhes', {contato});
    }

    async function loadContatos() {
        const response = await api.get('contatos');

        setContatos(response.data);
        setTotal(response.headers['x-total-count']);
    }

    useEffect(() => {
        loadContatos();
    }, []);


    function navigateToNew() {
        navigation.navigate('Adicionar');
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.busca}>
                {/* <Image style={styles.img} source={logo}/> */}
                <TextInput
                    style={{ height: 30 }}
                    placeholder="Buscar contato"
                />
                <TouchableOpacity onPress={() => { }}>
                    <Feather name="search" size={25} color="#9fe2f4" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={contatos}
                style={styles.contatosList}
                keyExtractor={contato => String(contato.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: contato}) => (
                    <View style={styles.contato}>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigateToDetail(contato)}>
                            <Text style={styles.contatoValue}> {contato.nome} </Text>
                            <Feather name="arrow-right-circle" size={20} color="#9fe2f4" />
                        </TouchableOpacity>
                    </View>

                )}
            />

            <View >
                <TouchableOpacity style={styles.action}
                    onPress={navigateToNew}>
                    <Text style={styles.actionText}> Adicionar Contato </Text>
                    <Feather name="plus-circle" size={40} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.header}>
                {/* <Image style={styles.img} source={logo}/> */}
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>
                        {total} contatos
            </Text>
                </Text>
            </View>
        </View>
    );
}
