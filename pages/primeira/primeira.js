import { Image } from "react-native";
import { Container } from "./styled";

export default function Primeira({navigation}) {
    return (
        <Container onPress={() => navigation.navigate('Inicio')}>
            <Image
                source={require('../../assets/logoclaro.png')}
                style={{ width: 300, height: 300 }}
            />
        </Container>
    )
}