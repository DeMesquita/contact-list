import React, {useEffect, useState} from 'react';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import api from '../../services/api';


export default function Detalhes() {
    const [contato, setContatos] = useState();

    const navigation = useNavigation();
   


    const [selectedImage, setSelectedImage] = React.useState(null);

    async function loadContatos() {
        const response = await api.post(contato);
        setContatos(response.data);
    }

    useEffect(() => {
        loadContatos();
    }, []);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
          }
      
          setSelectedImage({ localUri: pickerResult.uri });
        };
      
        if (selectedImage !== null) {
          return (
            <View style={styles.container}>
              <Image
                source={{ uri: selectedImage.localUri }}
                style={styles.thumbnail}
              />
            </View>
          );
        }
    return (
        <View style={styles.container} >

            <View style={styles.contato}>


                <View >
                    <TouchableOpacity style={styles.user} onPress={openImagePickerAsync}>
                        <Feather name="user" size={50} color="#1999e9" />
                    </TouchableOpacity>
                </View>

                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nome"
                        value={contato.nome}
                    />
                    {/* <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={this.state.international}
                        onChangeText={text => {
                            this.setState({
                                international: text
                            })
                        }}
                        // add the ref to a local var
                        ref={(ref) => this.phoneField = ref}
                    /> */}

                    <TextInput
                        style={styles.textInput}
                        placeholder="Telefone"
                        value={contato.telefone }
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        value={contato.email }
                    />

                </View>

            </View>

            <View >
                <TouchableOpacity style={styles.action}
                    onPress={() => { }}>
                    <Text style={styles.actionText}> Adicionar Contato </Text>
                    <Feather name="plus-circle" size={40} color="white" />
                </TouchableOpacity>
            </View>

        </View>
    );
}
