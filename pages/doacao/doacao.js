import React from 'react';
import { View } from "react-native";
import {
    Base, Container, Data, Container2, DataText, Descricao, DiaHoraText, Fundo, Header, Titulo, Container3, Div, Caracteristica, Valor, Explicacao, ExplicacaoContainer, Importar, ImportarText
} from "./styled";
import { Icon } from 'react-native-elements';
import Menu from "../../components/menu/menu";

export default function Doacao({navigation}) {
    return (
        <Container>
            <Header>
                <Icon name='left' type='antdesign' size='25' onPress={() => navigation.goBack()} />
                <Titulo>Doação de Produtos</Titulo>
                <View />
            </Header>
            <Base>
                <Fundo>
                    <Descricao> 1 tonelada de roupa</Descricao>
                </Fundo>
            </Base>
            <Container2>
                <Data>
                    <DataText>13 de maio de 2024</DataText>
                </Data>
                <DiaHoraText>segunda, 10hrs</DiaHoraText>
            </Container2>
            <Container3>
                <Div>
                    <Caracteristica>Criado por</Caracteristica>
                    <Valor>Empresa fictícia</Valor>
                </Div>
                <Div>
                    <Caracteristica>Categoria</Caracteristica>
                    <Valor>Produtos</Valor>
                </Div>
                <Div>
                    <Caracteristica>Subtipo</Caracteristica>
                    <Valor>Vestuário</Valor>
                </Div>
                <Div>
                    <Caracteristica>Local</Caracteristica>
                    <Valor>Unisinos - São Leopoldo</Valor>
                </Div>
                <Div>
                    <Caracteristica>Status</Caracteristica>
                    <Valor>Pendente validação</Valor>
                </Div>
            </Container3>
            <ExplicacaoContainer>
                <Explicacao>Anexe documentos com o botão abaixo para conseguir mudar o status da sua doação</Explicacao>
                <Importar>
                    <ImportarText>Anexar Documento</ImportarText>
                </Importar>
            </ExplicacaoContainer>
            <Menu navigation={navigation}/>
        </Container>
    )
}
