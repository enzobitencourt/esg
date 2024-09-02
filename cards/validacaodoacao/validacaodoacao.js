import React from 'react';
import { Container, Descricao, Div, Excluir, ExcluirText, Status, StatusEscrito, Titulo, Validar, ValidarText } from './styled';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';

const DeletarAlert = ({ isVisible, onClose }) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            style={styles.modal}
        >
            <View style={styles.alertContainer}>
                <Text style={styles.alertTitle}>Deletar Conta</Text>
                <Text style={styles.alertMessage}>Você tem certeza que deseja deletar conta?</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={onClose}>
                        <Text style={styles.buttonText2}>Sim, deletar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default function CardValidacaoDoacao(props) {
    const [isAlert2Visible, setAlert2Visible] = useState(false);

    const showAlert2 = () => {
        setAlert2Visible(true);
    };

    const hideAlert2 = () => {
        setAlert2Visible(false);
    };
    return (
        <Container>
            <Titulo>Doação de Serviços</Titulo>
            <Descricao>Lavagem de roupas Unisinos</Descricao>
            <Status>
                <StatusEscrito>Pendente validação</StatusEscrito>
            </Status>
            <Div>
                <Validar onPress={() => props.navigation.navigate('Doacao')}>
                    <ValidarText>Validar</ValidarText>
                </Validar>
                <Excluir>
                    <ExcluirText>Excluir Doação</ExcluirText>
                </Excluir>
            </Div>
            <DeletarAlert isVisible={isAlert2Visible} onClose={hideAlert2} />
        </Container>
    );
}

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        justifyContent: 'flex-end',
    },
    alertContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 27,
        borderTopRightRadius: 27,
        alignItems: 'center',
        width: '100%',
        height: '25%'
    },
    alertTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#136B69',
        fontFamily: 'League Spartan',
        textTransform: 'capitalize'
    },
    alertMessage: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'League Spartan'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flex: 1,
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#C5CFEE',
        borderRadius: '50px',
        alignItems: 'center',
    },
    buttonText: {
        color: '#136B69',
        fontSize: 16,
        fontWeight: '500'
    },
    button2: {
        flex: 1,
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#136B69',
        borderRadius: '50px',
        alignItems: 'center',
    },
    buttonText2: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500'
    }
});