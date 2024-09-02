import React from 'react';
import { View, Text } from 'react-native';
import Menu from "../../components/menu/menu";
import { AcordionView, Container, Descricao, NotaContainer, NotaText, Nota2, Titulo, Pontos } from "./styled";
import Accordion from './acordion'

export default function Nota({navigation}) {
    return (
        <Container>
            <Titulo>Nota ESG</Titulo>
            <Descricao>De acordo com seu histórico de doações, a plataforma ETIKA lhe confere a nota ESG de</Descricao>
            <NotaContainer>
                <Nota2>
                    <NotaText>4,5</NotaText>
                </Nota2>
                <Pontos>Pontos</Pontos>
            </NotaContainer>
            <AcordionView>
                <Accordion title="Entenda sua Nota" tipo='entenda'>
                    <Text>Conteúdo da primeira seção</Text>
                </Accordion>
                <Accordion title="Como Calculamos?" tipo='descreva'>
                    <Text>Conteúdo da segunda seção</Text>
                </Accordion>
            </AcordionView>
            <Menu navigation={navigation} numero='2'/>
        </Container>
    )
}
