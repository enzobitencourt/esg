import { Image, View } from "react-native";
import { Botao, Botao2, Cadastro, Confirma, Container, Container2 } from "./styled";

export default function Inicio({navigation}) {
    return (
        <Container>
            <View />
            <Image
                source={require('../../assets/logoescuro.png')}
                style={{ width: 300, height: 300 }}
            />
            <Container2>
                <Botao2 onPress={() => navigation.navigate('Login')}>
                    <Confirma>Entrar</Confirma>
                </Botao2>
                <Botao onPress={() => navigation.navigate('Cadastro')}>
                    <Cadastro>Cadastrar-se</Cadastro>
                </Botao>
            </Container2>
        </Container>
    )
}