import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../../components/menu/menu';
import ObjectCarousel from '../../cards/objectcarousel/objectcarousel'; // Updated import
import { Container, Container2, Nome, TituloContainer, Texto, PerfilContainer, Perfil, Plus, Div, Titulo, ContainerDoacao } from './styled';
import { Icon } from 'react-native-elements';
import CardDoacao from '../../cards/doacao/doacao';

export default function Home({navigation}) {
    return (
        <Container>
            <Container2>
                <Div>
                    <PerfilContainer>
                        <Perfil onPress={() => navigation.navigate('MeuPerfil')}/>
                    </PerfilContainer>
                    <TituloContainer>
                        <Texto>Olá,</Texto>
                        <Nome>Enzo</Nome>
                    </TituloContainer>
                </Div>
                <Icon name='add' reverse onPress={() => navigation.navigate('CadastroDoacao')} color='#BFE0E0' reverseColor='black' size='20' type='material' />
            </Container2>
            <ObjectCarousel />
            <ContainerDoacao>
                <Titulo>Histórico de doações</Titulo>
                <CardDoacao navigation={navigation} />
                <CardDoacao navigation={navigation}/>
            </ContainerDoacao>
            <Menu navigation={navigation} numero='1'/>
        </Container>
    );
}
