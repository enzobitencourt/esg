import React from 'react';
import { Container, Descricao, Status, StatusEscrito, Titulo } from './styled';

export default function CardDoacao(props) {
    return (
        <Container onPress={() => props.navigation.navigate('Doacao')}>
            <Titulo>Doação de Serviços</Titulo>
            <Descricao>Lavagem de roupas Unisinos</Descricao>
            <Status>
                <StatusEscrito>Pendente validação</StatusEscrito>
            </Status>
        </Container>
    );
}
