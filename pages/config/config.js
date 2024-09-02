import Menu from "../../components/menu/menu";
import { Botao, Container, Descricao, Div, Header, Nome, Perfil, Titulo } from "./styled";
import { Icon } from 'react-native-elements';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const SairAlert = ({ isVisible, onClose }) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            style={styles.modal}
        >
            <View style={styles.alertContainer}>
                <Text style={styles.alertTitle}>Sair</Text>
                <Text style={styles.alertMessage}>Você tem certeza que deseja sair da conta?</Text>
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

export default function Config({navigation}) {
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [isAlert2Visible, setAlert2Visible] = useState(false);

    const showAlert = () => {
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    const showAlert2 = () => {
        setAlert2Visible(true);
    };

    const hideAlert2 = () => {
        setAlert2Visible(false);
    };

    return (
        <Container>
            <Header>
                <Titulo>Configurações</Titulo>
                <Perfil />
                <Nome>Inventada Limitada</Nome>
            </Header>
            <Botao onPress={() => navigation.navigate('MeuPerfil')}>
                <Div>
                    <Icon name='user' reverse color='#BFE0E0' reverseColor='black' type='antdesign' size='22' />
                    <Descricao>Perfil</Descricao>
                </Div>
                <Icon name='right' type='antdesign' size={20} />
            </Botao>
            <Botao onPress={() => navigation.navigate('Senha')}>
                <Div>
                    <Icon name='key' reverse color='#BFE0E0' reverseColor='black' type='antdesign' size='22' />
                    <Descricao>Gerenciador de senha</Descricao>
                </Div>
                <Icon name='right' type='antdesign' size={20} />
            </Botao>
            <Botao onPress={showAlert2}>
                <Div>
                    <Icon name='delete' reverse color='#BFE0E0' reverseColor='black' type='antdesign' size='22' />
                    <Descricao>Deletar conta</Descricao>
                </Div>
            </Botao>
            <Botao onPress={showAlert}>
                <Div>
                    <Icon name='logout' reverse color='#BFE0E0' reverseColor='black' type='antdesign' size='22' />
                    <Descricao>Sair</Descricao>
                </Div>
            </Botao>
            <SairAlert isVisible={isAlertVisible} onClose={hideAlert} />
            <DeletarAlert isVisible={isAlert2Visible} onClose={hideAlert2} />
            <Menu navigation={navigation} numero='4'/>
        </Container>
    )
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
