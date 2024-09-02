import React, { useState } from 'react';
import { Header, Perfil, Div2, Inputs, Botao2, Confirma, Container2, Header2, Titulo2 } from "../styled";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const EditableText = ({ text, onTextChange, name }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentText, setCurrentText] = useState(text);

    const handleTextPress = () => {
        setIsEditing(true);
    };

    const handleInputChange = (newText) => {
        setCurrentText(newText);
        if (onTextChange) {
            onTextChange(newText);
        }
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    return (
        <Div2>
            <Text style={styles.label}>{name}</Text>
            <View style={styles.container}>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={currentText}
                        onChangeText={handleInputChange}
                        onBlur={handleBlur}
                        autoFocus
                    />
                ) : (
                    <TouchableOpacity onPress={handleTextPress}>
                        <Text style={styles.text}>{currentText}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </Div2>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        borderRadius: '13px',
        backgroundColor: '#ECF1FF'
    },
    text: {
        fontSize: 16,
        color: 'black',
    },
    input: {
        fontSize: 16,
        color: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    label: {
        color: 'black',
        fontFamily: 'League Spartan',
        fontSize: 16,
        fontWeight: '500',
        width: '100%'
    },
});

export default function MeuPerfil({navigation}) {
    const [text, setText] = useState('Clique para editar');

    return (
        <Container2>
            <Header>
                <Header2>
                    <Icon name='left' type='antdesign' size='25' onPress={() => navigation.goBack()} />
                    <Titulo2>Meu perfil</Titulo2>
                    <Icon name='left' type='antdesign' color='white' size='25' />
                </Header2>
                <Perfil />
            </Header>
            <Inputs>
                <EditableText text={text} onTextChange={setText} name='Nome da Empresa' />
                <EditableText text={text} onTextChange={setText} name='Sócio' />
                <EditableText text={text} onTextChange={setText} name='CNPJ' />
                <EditableText text={text} onTextChange={setText} name='E-mail' />
                <EditableText text={text} onTextChange={setText} name='Telefone' />
                <EditableText text={text} onTextChange={setText} name='UF' />
            </Inputs>
            <Botao2 onPress={() => navigation.navigate('Config')}>
                <Confirma>Atualizar Perfil</Confirma>
            </Botao2>
        </Container2>
    );
}
